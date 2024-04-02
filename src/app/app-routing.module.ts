import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'login' , component : LoginComponent},
  
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'ajoutproduits',
    loadChildren: () => import('./menu/ajoutproduits/ajoutproduits.module').then( m => m.AjoutproduitsPageModule)
  },
  {
    path:'majproduits/:id',
    loadChildren: () => import('./menu/majproduits/majproduits.module').then( m => m.MajproduitsPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./menu/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'ajouterclients',
    loadChildren: () => import('./menu/ajouterclients/ajouterclients.module').then( m => m.AjouterclientsPageModule)
  },
  {
    path: 'majclients/:id',
    loadChildren: () => import('./menu/majclients/majclients.module').then( m => m.MajclientsPageModule)
  },
  {
    path: 'ajouterfournisseurs',
    loadChildren: () => import('./menu/ajouterfournisseurs/ajouterfournisseurs.module').then( m => m.AjouterfournisseursPageModule)
  },
  {
    path: 'majfournisseurs/:id',
    loadChildren: () => import('./menu/majfournisseurs/majfournisseurs.module').then( m => m.MajfournisseursPageModule)
  },
  {
    path: 'ajoutercommandes',
    loadChildren: () => import('./menu/ajoutercommandes/ajoutercommandes.module').then( m => m.AjoutercommandesPageModule)
  },
  {
    path: 'majcommandes/:id',
    loadChildren: () => import('./menu/majcommandes/majcommandes.module').then( m => m.MajcommandesPageModule)
  },
  {
    path: 'fournisseur',
    loadChildren: () => import('./menu/fournisseurs/fournisseurs.module').then( m => m.FournisseursPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./menu/commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./menu/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'livreurs',
    loadChildren: () => import('./menu/livreurs/livreurs.module').then( m => m.LivreursPageModule)
  },
  {
    path: 'ajouterlivreurs',
    loadChildren: () => import('./menu/ajouterlivreurs/ajouterlivreurs.module').then( m => m.AjouterlivreursPageModule)
  },
  {
    path: 'majlivreurs/:id',
    loadChildren: () => import('./menu/majlivreurs/majlivreurs.module').then( m => m.MajlivreursPageModule)
  },
  {
    path: 'menulivreur',
    loadChildren: () => import('./menulivreur/menulivreur.module').then( m => m.MenulivreurPageModule)
  },
  {
    path: 'conscommandes',
    loadChildren: () => import('./menulivreur/conscommandes/conscommandes.module').then( m => m.ConscommandesPageModule)
  },
  {
    path: 'modcommande/:id',
    loadChildren: () => import('./menulivreur/modcommande/modcommande.module').then( m => m.ModcommandePageModule)
  },
  {
    path: 'consclients',
    loadChildren: () => import('./menulivreur/consclients/consclients.module').then( m => m.ConsclientsPageModule)
  },
  {
    path: 'client-details/:id',
    loadChildren: () => import('./menulivreur/client-details/client-details.module').then( m => m.ClientDetailsPageModule)
  },
  {
    path: 'transaction/:id',
    loadChildren: () => import('./menu/transaction/transaction.module').then( m => m.TransactionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
