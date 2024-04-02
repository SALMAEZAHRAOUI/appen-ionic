import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-majcommandes',
  templateUrl: './majcommandes.page.html',
  styleUrls: ['./majcommandes.page.scss'],
})
export class MajcommandesPage implements OnInit {

  orderId: string | null = null;
  order: any = {};
  orderDetails: any[] = [];
  clients: any[] = []; // Assurez-vous d'avoir la liste des clients
  products: any[] = []; // Assurez-vous d'avoir la liste des produits
  deliveryAmount: number = 0;
  orderTotal: number = 0;   

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.loadOrderDetails();
    this.loadClients();
    this.loadProducts();
  }

  async loadOrderDetails() {
    try {
      if (this.orderId !== null) {
        this.order = await this.dbService.getOrderById(this.orderId);
        this.orderDetails = await this.dbService.getOrderDetailsByOrderId(this.orderId);
        this.calculateTotal(); 
        this.deliveryAmount = this.order.deliveryAmount;
        for (const detail of this.orderDetails) {
          const product = this.products.find(p => p.id === detail.productId);
          if (product) {
            product.quantity = detail.quantite;
          }
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement des détails de la commande:', error);
    }
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
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }

  async updateOrder() {
    try {
      if (this.orderId !== null) {
        await this.dbService.updateOrder(this.orderId, this.order);
        // Mise à jour des détails de la commande
        for (const detail of this.orderDetails) {
          await this.dbService.updateOrderDetail(detail.id, { quantity: detail.quantity });
        }
        this.navigateToOrders();
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la commande:', error);
    }
  }

  async deleteOrder() {
    try {
      if (this.orderId !== null) {
        await this.dbService.deleteOrder(this.orderId);
        // Supprimer les détails de la commande
        for (const detail of this.orderDetails) {
          await this.dbService.deleteOrderDetail(detail.id);
        }
        this.navigateToOrders();
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la commande:', error);
    }
  }

  navigateToOrders() {
    this.router.navigate(['/commande']);
  }

  getClientName(clientId: string): string {
    const client = this.clients.find(client => client.id === clientId);
    return client ? client.name : '';
  }

  calculateTotal(): number {
    let total = 0;
  this.products.forEach(product => {
    if (typeof product.quantity === 'number' && typeof product.prix === 'number') {
      if (product.quantity < 0) {
        // Si la quantité est négative, la fixer à zéro
        product.quantity = 0;
      }
      total += product.quantity * product.prix;
    }
  });
  total += typeof this.deliveryAmount === 'number' ? this.deliveryAmount : 0;
  return total;
  }
async showAllClients() {
    const alert = await this.alertController.create({
      header: 'Sélectionner un client',
      inputs: this.clients.map(client => ({
        type: 'radio',
        label: client.name,
        value: client.id,
        checked: client.id === this.order.clientId
      })),
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Annulé');
          }
        }
      ]
    });

    await alert.present();
  }
}
