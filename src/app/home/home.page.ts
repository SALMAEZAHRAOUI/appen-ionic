import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  confirmPassword: string = '';
  registrationForm: FormGroup;

  constructor(private databaseService: DatabaseService, private router: Router, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Utilisation du validateur d'email
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  
  navigateTomenu() {
    this.router.navigate(['/menu']);
  }
  
  async register() {
    this.errorMessage = ''; // Réinitialiser le message d'erreur
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    try {
      const emailExists = await this.databaseService.checkEmailExists(this.email);
      if (emailExists) {
        this.errorMessage = 'Cet e-mail existe déjà';
      } else {
        await this.databaseService.addUser(this.username, this.email, this.password);
        const userId = this.databaseService.getCurrentUserEmail();
        console.log(userId);
        // Mettre à jour l'identifiant de l'utilisateur dans le service
        this.databaseService.setUserEmail(userId);
        alert('Inscription réussie');
        this.router.navigate(['/menu']);
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
      this.errorMessage = 'Erreur lors de l\'enregistrement de l\'utilisateur';
    }
  }

}