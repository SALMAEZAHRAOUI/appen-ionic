import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterclients',
  templateUrl: './ajouterclients.page.html',
  styleUrls: ['./ajouterclients.page.scss'],
})
export class AjouterclientsPage  {
  client = {
    name: '',
    address: '',
    email: '',
    phone: ''
  };


  constructor(private dbService: DatabaseService,  private router: Router) { }
  async addClient() {
    try {
      await this.dbService.ajouterClient(this.client.name, this.client.address, this.client.email, this.client.phone);
      this.router.navigate(['/client']);
      // Réinitialiser le formulaire après l'ajout
      this.client = {
        name: '',
        address: '',
        email: '',
        phone: ''
      };
    } catch (error) {
      console.error('Erreur lors de l\'ajout du client :', error);
      // Gérer l'erreur ici
    }
  }

}
