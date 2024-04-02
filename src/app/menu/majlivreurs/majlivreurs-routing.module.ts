import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajlivreursPage } from './majlivreurs.page';

const routes: Routes = [
  {
    path: '',
    component: MajlivreursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajlivreursPageRoutingModule {}
