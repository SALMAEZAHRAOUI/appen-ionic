import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.page.html',
  styleUrls: ['./livreurs.page.scss'],
})
export class LivreursPage implements OnInit {

  livreurs: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.loadLivreurs();
  }

  async loadLivreurs() {
    try {
      this.livreurs = await this.dbService.getAllDeliveryPersons();
    } catch (error) {
      console.error('Erreur lors du chargement des livreurs :', error);
    }
  }

  navigateToMajLivreur(livreurId: string) {
    this.router.navigate(['/majlivreurs', livreurId]); // Utilisez 'majlivreur/:id' comme chemin
  }

  navigateToAddLivreur() {
    this.router.navigate(['/ajouterlivreurs']);
  }
  toggleMenu() {
    this.menu.toggle('main-menu'); // 'main-menu' est l'ID de votre menu
  }
}