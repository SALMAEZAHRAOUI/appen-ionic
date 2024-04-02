import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModcommandePageRoutingModule } from './modcommande-routing.module';

import { ModcommandePage } from './modcommande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModcommandePageRoutingModule
  ],
  declarations: [ModcommandePage]
})
export class ModcommandePageModule {}
