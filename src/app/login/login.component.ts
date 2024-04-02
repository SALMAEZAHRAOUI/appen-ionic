import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private navCtrl: NavController, private databaseService: DatabaseService) {}

  async login() {
    try {
      let isDeliveryPerson = false;
      // Vérifier si l'entrée de l'utilisateur est un email (cela pourrait être amélioré pour une détection plus précise)
      if (this.username.includes('@')) {
        // Vérifier si l'utilisateur est un livreur en utilisant la fonction appropriée dans le service de base de données
        isDeliveryPerson = await this.databaseService.checkDeliveryPersonExists(this.username, this.password);
      }
      
      if (isDeliveryPerson) {
        // Si c'est un livreur, rediriger vers la page du menu des livreurs
        this.navCtrl.navigateRoot('/menulivreur');
      } else {
        // Sinon, procéder comme d'habitude pour l'utilisateur
        const userExists = await this.databaseService.checkUserExists(this.username, this.password);
        if (userExists) {
          const userEmail = await this.databaseService.getCurrentUserEmail();
          if (userEmail) {
            console.log(userEmail);
            this.databaseService.setUserEmail(userEmail);
            this.navCtrl.navigateRoot('/menu');
          } else {
            console.error('L\'email de l\'utilisateur est introuvable.');
            this.errorMessage = 'Une erreur s\'est produite lors de la connexion.';
          }
        } else {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        }
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      this.errorMessage = 'Une erreur s\'est produite lors de la connexion.';
    }
  }

  navigateToRegistration() {
    this.navCtrl.navigateForward('/home');
  }
}