import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-ajoutercommandes',
  templateUrl: './ajoutercommandes.page.html',
  styleUrls: ['./ajoutercommandes.page.scss'],
})
export class AjoutercommandesPage implements OnInit {

  clients: any[] = [];
  products: any[] = [];
  selectedClient: string | null = null;
  selectedProductQuantity: number = 0; // Déclaration de selectedProductQuantity
  orderDate: string = new Date().toISOString().substring(0, 10); // Date actuelle
  deliveryAmount: number = 0;
  orderTotal: number = 0;
  selectedStatus: string = '';
  orderStatusOptions: string[] = ['En attente', 'En cours', 'Terminée']; // Différents statuts de commande

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.loadClients();
    this.loadProducts();
  }

  async loadClients() {
    try {
      this.clients = await this.dbService.getAllClients();
    } catch (error) {
      console.error('Erreur lors du chargement des clients:', error);
    }
  }

  async loadProducts() {
    try {
      this.products = await this.dbService.getAllProducts();
      for (const product of this.products) {
        const stock = product.stock; // Stock du produit
        // Mettre à jour la quantité maximale de l'input en fonction du stock
        product.maxQuantity = stock;
      }
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }

  calculateTotal(): number {
    let total = 0;
    this.products.forEach(product => {
      if (product.quantity !== undefined && product.quantity !== null && product.prix) {
        if (product.quantity < 0) {
          // Si la quantité est négative, la fixer à zéro
          product.quantity = 0;
        }
        total += product.quantity * product.prix;
      }
    });
    return total + this.deliveryAmount;
  }

  async addOrder() {
    try {
      if (this.selectedClient && this.products.length > 0) {
        // Préparez les détails de la commande
        const commandeDetails: {
          clientId: string;
          date: string;
          status: string;
          produits: { id: string; quantity: number }[];
        } = {
          clientId: this.selectedClient,
          date: this.orderDate,
          status: this.selectedStatus, // Ajout du statut de commande
          produits: this.products,
        };

        // Calculez le prix total de la commande
        const prixTotal = this.calculateTotal();

        // Ajoutez la commande dans la base de données
        await this.dbService.ajouterCommande({
          clientId: commandeDetails.clientId,
          date: commandeDetails.date,
          prixTotal: prixTotal,
          status: commandeDetails.status,
          produits: commandeDetails.produits
        });
        console.log('Commande ajoutée avec succès !');

        // Mettez à jour le stock des produits
        for (const product of this.products) {
          const updatedStock = product.stock - product.quantity;
          await this.dbService.updateProductStock(product.id, updatedStock);
        }

        this.router.navigate(['/commande']);
      } else {
        console.error('Veuillez sélectionner un client et au moins un produit.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la commande:', error);
    }
  }
}
