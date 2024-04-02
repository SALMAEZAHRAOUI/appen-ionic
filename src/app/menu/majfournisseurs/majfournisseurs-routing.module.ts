import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajfournisseursPage } from './majfournisseurs.page';

const routes: Routes = [
  {
    path: '',
    component: MajfournisseursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajfournisseursPageRoutingModule {}
