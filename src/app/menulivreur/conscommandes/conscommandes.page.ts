import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conscommandes',
  templateUrl: './conscommandes.page.html',
  styleUrls: ['./conscommandes.page.scss'],
})
export class ConscommandesPage implements OnInit {

  orders: any[] = [];

  constructor(private router: Router,private databaseService: DatabaseService) { }

  ngOnInit() {
    this.loadOrders();
  }

  async loadOrders() {
    try {
      this.orders = await this.databaseService.getOrdersByConnectedDeliveryPerson();
      this.orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error('Erreur lors du chargement des commandes:', error);
    }
  }
  navigateToMajCommande(commandeId: string) {
    this.router.navigate(['/modcommande', commandeId]);
  }
}