import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-ajouterlivreurs',
  templateUrl: './ajouterlivreurs.page.html',
  styleUrls: ['./ajouterlivreurs.page.scss'],
})
export class AjouterlivreursPage  {

  livreur: any = {};

  constructor(private dbService: DatabaseService, private router: Router) { }

  addLivreur() {
    try {
      this.dbService.addDeliveryPerson(this.livreur.name, this.livreur.email, this.livreur.phone, this.livreur.password );
      console.log('Livreur ajouté avec succès !');
      // Rediriger vers la liste des livreurs après l'ajout
      this.router.navigate(['/livreurs']);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livreur :', error);
    }
  }
}