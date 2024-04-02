import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit {

  commandes: any[] = [];

  constructor(private router: Router, private dbService: DatabaseService , private menu: MenuController) { }

  ngOnInit() {
    this.loadCommandes();
  }

  async loadCommandes() {
    try {
      this.commandes = await this.dbService.getAllCommandes();
      // Tri des commandes par date (du plus récent au plus ancien)
      this.commandes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error('Erreur lors du chargement des commandes :', error);
    }
  }

  navigateToMajCommande(commandeId: string) {
    this.router.navigate(['/majcommandes', commandeId]);
  }
  toggleMenu() {
    this.menu.toggle('main-menu'); // 'main-menu' est l'ID de votre menu
  }
}