import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajproduitsPage } from './majproduits.page';

const routes: Routes = [
  {
    path: '',
    component: MajproduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajproduitsPageRoutingModule {}
