import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenulivreurPage } from './menulivreur.page';

const routes: Routes = [
  {
    path: '',
    component: MenulivreurPage
  },
  {
    path: 'conscommandes',
    loadChildren: () => import('./conscommandes/conscommandes.module').then( m => m.ConscommandesPageModule)
  },
  {
    path: 'modcommande',
    loadChildren: () => import('./modcommande/modcommande.module').then( m => m.ModcommandePageModule)
  },
  {
    path: 'consclients',
    loadChildren: () => import('./consclients/consclients.module').then( m => m.ConsclientsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenulivreurPageRoutingModule {}
