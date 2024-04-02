import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-majclients',
  templateUrl: './majclients.page.html',
  styleUrls: ['./majclients.page.scss'],
})
export class MajclientsPage implements OnInit {

  clientId: string | null = null; // Initialisez clientId avec null

  client: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) { }


  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.loadClientDetails();
    this.client = {
      name: 'Nom du client',
      address: 'Adresse du client',
      email: 'Email du client',
      phone: 'Téléphone du client'
    };
  }
  openWhatsApp() {
    const phoneNumber = this.client.phone;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  
    window.open(whatsappUrl, '_system');
  }
  
  openWhatsAppBusiness() {
    const phoneNumber = this.client.phone;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&app_absent=0`;
  
    window.open(whatsappUrl, '_system');
  }

  async loadClientDetails() {
    try {
      if (this.clientId !== null) { // Vérifiez la nullité de clientId avant utilisation
        this.client = await this.dbService.getClientById(this.clientId);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des détails du client:', error);
    }
  }

  async updateClient() {
    try {
      if (this.clientId !== null) { // Vérifiez la nullité de clientId avant utilisation
        await this.dbService.updateClient(this.clientId, this.client);
        this.navigateToClients();
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du client:', error);
    }
  }

  async deleteClient() {
    try {
      if (this.clientId !== null) { // Vérifiez la nullité de clientId avant utilisation
        await this.dbService.deleteClient(this.clientId);
        this.navigateToClients();

      }
    } catch (error) {
      console.error('Erreur lors de la suppression du client:', error);
    }
  }
  
  navigateToClients() {
    this.router.navigate(['/client']); // Rediriger vers la page des clients
  }
}