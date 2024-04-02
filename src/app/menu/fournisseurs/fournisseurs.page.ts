import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.page.html',
  styleUrls: ['./fournisseurs.page.scss'],
})
export class FournisseursPage implements OnInit {

  fournisseurs: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.loadFournisseurs();
  }

  async loadFournisseurs() {
    try {
      this.fournisseurs = await this.dbService.getAllFournisseurs();
    } catch (error) {
      console.error('Erreur lors du chargement des fournisseurs:', error);
    }
  }

  navigateToMajFournisseur(fournisseurId: string) {
    this.router.navigate(['/majfournisseurs', fournisseurId]);
  }
  toggleMenu() {
    this.menu.toggle('main-menu'); // 'main-menu' est l'ID de votre menu
  }
  

}
