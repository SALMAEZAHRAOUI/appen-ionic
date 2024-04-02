import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsclientsPage } from './consclients.page';

const routes: Routes = [
  {
    path: '',
    component: ConsclientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsclientsPageRoutingModule {}
