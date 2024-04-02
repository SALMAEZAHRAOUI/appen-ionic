import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service'; // Assurez-vous d'importer le service DatabaseService

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  clientId: string | null = null;
  commandes: any[] = [];

  constructor(private route: ActivatedRoute, private dbService: DatabaseService) { }

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.loadClientCommands();
  }

  async loadClientCommands() {
    try {
      if (this.clientId !== null) {
        // Récupérer les commandes du client en fonction de son ID
        this.commandes = await this.dbService.getOrdersByClientId(this.clientId);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des commandes du client:', error);
    }
  }
}
