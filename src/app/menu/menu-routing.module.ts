import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  
    
  {
    path: 'ajoutproduits',
    loadChildren: () => import('./ajoutproduits/ajoutproduits.module').then( m => m.AjoutproduitsPageModule)
  },
  {
    path: 'majproduits/:productId',
    loadChildren: () => import('./majproduits/majproduits.module').then( m => m.MajproduitsPageModule)
  },
  {
    path: 'ajouterclients',
    loadChildren: () => import('./ajouterclients/ajouterclients.module').then( m => m.AjouterclientsPageModule)
  },
  {
    path: 'majclients',
    loadChildren: () => import('./majclients/majclients.module').then( m => m.MajclientsPageModule)
  },
  {
    path: 'ajouterfournisseurs',
    loadChildren: () => import('./ajouterfournisseurs/ajouterfournisseurs.module').then( m => m.AjouterfournisseursPageModule)
  },
  {
    path: 'majfournisseurs',
    loadChildren: () => import('./majfournisseurs/majfournisseurs.module').then( m => m.MajfournisseursPageModule)
  },
  {
    path: 'ajoutercommandes',
    loadChildren: () => import('./ajoutercommandes/ajoutercommandes.module').then( m => m.AjoutercommandesPageModule)
  },
  {
    path: 'majcommandes',
    loadChildren: () => import('./majcommandes/majcommandes.module').then( m => m.MajcommandesPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'fournisseur',
    loadChildren: () => import('./fournisseurs/fournisseurs.module').then( m => m.FournisseursPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path:'majproduits/:id',
    loadChildren: () => import('./majproduits/majproduits.module').then( m => m.MajproduitsPageModule)
  },
  {
    path: 'livreurs',
    loadChildren: () => import('./livreurs/livreurs.module').then( m => m.LivreursPageModule)
  },
  {
    path: 'ajouterlivreurs',
    loadChildren: () => import('./ajouterlivreurs/ajouterlivreurs.module').then( m => m.AjouterlivreursPageModule)
  },
  {
    path: 'majlivreurs',
    loadChildren: () => import('./majlivreurs/majlivreurs.module').then( m => m.MajlivreursPageModule)
  },
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
