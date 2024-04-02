import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreursPage } from './livreurs.page';

const routes: Routes = [
  {
    path: '',
    component: LivreursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreursPageRoutingModule {}
