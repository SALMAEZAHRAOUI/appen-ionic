import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-ajoutproduits',
  templateUrl: './ajoutproduits.page.html',
  styleUrls: ['./ajoutproduits.page.scss'],
})
export class AjoutproduitsPage  {
  nouveauProduit: any = {};

  constructor(private dbService: DatabaseService) { }


  ajouterProduit() {
    // Appeler la méthode du service pour ajouter le produit à la base de données
    this.dbService.ajouterProduit(this.nouveauProduit.name, this.nouveauProduit.stock, 'null', this.nouveauProduit.prix)
      .then(() => {
        console.log('Produit ajouté avec succès !');
        // Réinitialiser le formulaire après l'ajout du produit
        this.nouveauProduit = {
          name: '',
          stock: 0,
          image: '',
          prix: 0  // Ajout du champ prix dans l'objet
        };
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du produit :', error);
      });
  }
}
