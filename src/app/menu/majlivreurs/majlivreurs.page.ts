import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-majlivreurs',
  templateUrl: './majlivreurs.page.html',
  styleUrls: ['./majlivreurs.page.scss'],
})
export class MajlivreursPage implements OnInit {

  livreurId: string | null = null;

  livreur: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) { }

  ngOnInit() {
    this.livreurId = this.route.snapshot.paramMap.get('id');
    this.loadLivreurDetails();
  }
  openWhatsApp() {
    const phoneNumber = this.livreur.phone;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  
    window.open(whatsappUrl, '_system');
  }
  
  openWhatsAppBusiness() {
    const phoneNumber = this.livreur.phone;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&app_absent=0`;
  
    window.open(whatsappUrl, '_system');
  }

  async loadLivreurDetails() {
    try {
      if (this.livreurId !== null) {
        this.livreur = await this.dbService.getDeliveryPersonById(this.livreurId);
      }
    } catch (error) {
      console.error('Error loading livreur details:', error);
    }
  }

  async updateLivreur() {
    try {
      if (this.livreurId !== null) {
        await this.dbService.updateDeliveryPerson(this.livreurId, this.livreur);
        this.navigateToLivreurs();
      }
    } catch (error) {
      console.error('Error updating livreur:', error);
    }
  }

  async deleteLivreur() {
    try {
      if (this.livreurId !== null) {
        await this.dbService.deleteDeliveryPerson(this.livreurId);
        this.navigateToLivreurs();
      }
    } catch (error) {
      console.error('Error deleting livreur:', error);
    }
  }
  
  navigateToLivreurs() {
    this.router.navigate(['/livreurs']);
  }
}