import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-ajouterfournisseurs',
  templateUrl: './ajouterfournisseurs.page.html',
  styleUrls: ['./ajouterfournisseurs.page.scss'],
})
export class AjouterfournisseursPage {

  fournisseur: any = {};

  constructor(private dbService: DatabaseService, private router: Router) { }

  addFournisseur() {
    try {
      this.dbService.ajouterFournisseur(this.fournisseur.name, this.fournisseur.address, this.fournisseur.email, this.fournisseur.phone);
      console.log('Fournisseur ajouté avec succès !');
      this.router.navigate(['/fournisseurs']);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du fournisseur:', error);
    }
  }

}
