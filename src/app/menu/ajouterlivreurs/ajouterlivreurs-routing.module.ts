import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterlivreursPage } from './ajouterlivreurs.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterlivreursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterlivreursPageRoutingModule {}
