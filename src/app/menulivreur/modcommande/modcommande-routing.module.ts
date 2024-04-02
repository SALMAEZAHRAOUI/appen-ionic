import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModcommandePage } from './modcommande.page';

const routes: Routes = [
  {
    path: '',
    component: ModcommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModcommandePageRoutingModule {}
