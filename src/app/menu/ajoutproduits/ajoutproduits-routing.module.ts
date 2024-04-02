import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutproduitsPage } from './ajoutproduits.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutproduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutproduitsPageRoutingModule {}
