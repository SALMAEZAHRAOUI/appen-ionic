import { Component, OnInit } from '@angular/core';
import { JSDocComment } from '@angular/compiler';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Menu Principale', url: 'menu', icon: 'home' },
    { title: 'Produits', url: 'produit', icon: 'cart' },
    { title: 'Clients', url: 'client', icon: 'people' },
    { title: 'Commandes', url: 'commande', icon: 'document' },
    { title: 'Fournisseurs', url: 'fournisseur', icon: 'business' },
    { title: 'Livreurs', url: 'livreurs', icon: 'bicycle' },
    { title: 'Déconnexion', url: 'login', icon: 'log-out' }

    
  ];

  constructor(private menu: MenuController) {}

  toggleMenu() {
    this.menu.toggle('main-menu'); // 'main-menu' est l'ID de votre menu
  }
  


  ngOnInit() {
    JSDocComment
  }

}

