import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterclientsPage } from './ajouterclients.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterclientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterclientsPageRoutingModule {}
