import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-majproduits',
  templateUrl: './majproduits.page.html',
  styleUrls: ['./majproduits.page.scss'],
})
export class MajproduitsPage implements OnInit {

  productId: string | null = null; // Initialisez productId avec null

  produit: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadProductDetails();
    this.produit = {
      name: 'Nom du produit',
      stock: 0,
      prix: 0,
      image: 'URL_de_l_image'
    };
  }

  async loadProductDetails() {
    try {
      if (this.productId !== null) { // Vérifiez la nullité de productId avant utilisation
        this.produit = await this.dbService.getProductById(this.productId);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des détails du produit:', error);
    }
  }

  async updateProduct() {
    try {
      if (this.productId !== null) { // Vérifiez la nullité de productId avant utilisation
        await this.dbService.updateProduct(this.productId, this.produit);
        this.navigateToProducts();
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du produit:', error);
    }
  }

  async deleteProduct() {
    try {
      if (this.productId !== null) { // Vérifiez la nullité de productId avant utilisation
        await this.dbService.deleteProduct(this.productId);
        this.navigateToProducts();

      }
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  }
  navigateToProducts() {
    this.router.navigate(['/produit']); // Rediriger vers la page des produits
  }
}