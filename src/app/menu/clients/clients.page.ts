import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.loadClients();
  }

  async loadClients() {
    try {
      this.clients = await this.dbService.getAllClients();
    } catch (error) {
      console.error('Erreur lors du chargement des clients :', error);
    }
  }

  navigateToMajClient(clientId: string) {
    this.router.navigate(['/majclients', clientId]); // Utilisez 'majclient/:id' comme chemin
  }

  navigateToAddClient() {
    this.router.navigate(['/ajouterclients']);
  }
  toggleMenu() {
    this.menu.toggle('main-menu'); // 'main-menu' est l'ID de votre menu
  }
}
