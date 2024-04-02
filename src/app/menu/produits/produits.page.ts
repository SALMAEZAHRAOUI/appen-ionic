import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MenuController } from '@ionic/angular';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  produits: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      this.produits = await this.dbService.getAllProducts();
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }

  navigateToMajProduits(productId: string) {
    this.router.navigate(['/majproduits', productId]); // Utilisez 'majproduits/:id' comme chemin
  }
  navigateTomenu() {
    this.router.navigate(['/ajoutproduits']);
  }
  toggleMenu() {
    this.menu.toggle('main-menu'); // 'main-menu' est l'ID de votre menu
  }
  

}


