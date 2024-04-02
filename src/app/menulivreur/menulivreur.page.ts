import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulivreur',
  templateUrl: './menulivreur.page.html',
  styleUrls: ['./menulivreur.page.scss'],
})
export class MenulivreurPage  {

  public appPages = [
    { title: 'Produits', url: 'conscommandes', icon: 'document' },
    { title: 'Clients', url: 'consclients', icon: 'people' },
    
  ];

  constructor() { }

  

}
