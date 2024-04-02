import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutercommandesPageRoutingModule } from './ajoutercommandes-routing.module';

import { AjoutercommandesPage } from './ajoutercommandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutercommandesPageRoutingModule
  ],
  declarations: [AjoutercommandesPage]
})
export class AjoutercommandesPageModule {}
