import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterfournisseursPage } from './ajouterfournisseurs.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterfournisseursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterfournisseursPageRoutingModule {}
