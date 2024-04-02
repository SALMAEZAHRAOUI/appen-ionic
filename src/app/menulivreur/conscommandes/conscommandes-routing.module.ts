import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConscommandesPage } from './conscommandes.page';

const routes: Routes = [
  {
    path: '',
    component: ConscommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConscommandesPageRoutingModule {}
