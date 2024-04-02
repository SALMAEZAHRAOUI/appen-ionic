import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-majfournisseurs',
  templateUrl: './majfournisseurs.page.html',
  styleUrls: ['./majfournisseurs.page.scss'],
})
export class MajfournisseursPage implements OnInit {

  fournisseurId: string | null = null; // Initialisez fournisseurId avec null

  fournisseur: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) { }

  ngOnInit() {
    this.fournisseurId = this.route.snapshot.paramMap.get('id');
    this.loadFournisseurDetails();
    this.fournisseur = {
      name: 'Nom du fournisseur',
      address: 'Adresse du fournisseur',
      email: 'Email du fournisseur',
      phone: 'Téléphone du fournisseur'
    };
  }
  openWhatsApp() {
    const phoneNumber = this.fournisseur.phone;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  
    window.open(whatsappUrl, '_system');
  }
  
  openWhatsAppBusiness() {
    const phoneNumber = this.fournisseur.phone;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&app_absent=0`;
  
    window.open(whatsappUrl, '_system');
  }

  async loadFournisseurDetails() {
    try {
      if (this.fournisseurId !== null) { // Vérifiez la nullité de fournisseurId avant utilisation
        this.fournisseur = await this.dbService.getFournisseurById(this.fournisseurId);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des détails du fournisseur:', error);
    }
  }

  async updateFournisseur() {
    try {
      if (this.fournisseurId !== null) { // Vérifiez la nullité de fournisseurId avant utilisation
        await this.dbService.updateFournisseur(this.fournisseurId, this.fournisseur);
        this.navigateToFournisseurs();
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du fournisseur:', error);
    }
  }

  async deleteFournisseur() {
    try {
      if (this.fournisseurId !== null) { // Vérifiez la nullité de fournisseurId avant utilisation
        await this.dbService.deleteFournisseur(this.fournisseurId);
        this.navigateToFournisseurs();
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du fournisseur:', error);
    }
  }

  navigateToFournisseurs() {
    this.router.navigate(['/fournisseur']); // Rediriger vers la page des fournisseurs
  }
}