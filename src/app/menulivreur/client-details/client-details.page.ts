import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {

  client: any;

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.getClientDetails();
  }

  async getClientDetails() {
    const clientId = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID du client depuis l'URL
    if (clientId !== null) { // Vérifier si clientId n'est pas null
      try {
        this.client = await this.databaseService.getClientById(clientId); // Appeler getClientById pour récupérer les informations du client
      } catch (error) {
        console.error('Erreur lors de la récupération des informations du client :', error);
      }
    } else {
      console.error('L\'ID du client n\'a pas été fourni dans l\'URL.');
    }
  }
  goBack() {
    this.navCtrl.back(); // Revenir à la page précédente dans l'historique de navigation
  }
}