import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu Principale', url: 'menu', icon: 'home' },
    { title: 'Produits', url: 'produit', icon: 'cart' },
    { title: 'Clients', url: 'client', icon: 'people' },
    { title: 'Commandes', url: 'commande', icon: 'document' },
    { title: 'Fournisseurs', url: 'fournisseur', icon: 'business' },
    { title: 'Livreurs', url: 'livreurs', icon: 'bicycle' },
    { title: 'Déconnexion', url: 'login', icon: 'log-out' }
  ];

  constructor() {}
}
