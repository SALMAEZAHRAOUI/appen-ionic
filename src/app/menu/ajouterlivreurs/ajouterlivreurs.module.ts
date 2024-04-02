import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterlivreursPageRoutingModule } from './ajouterlivreurs-routing.module';

import { AjouterlivreursPage } from './ajouterlivreurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterlivreursPageRoutingModule
  ],
  declarations: [AjouterlivreursPage]
})
export class AjouterlivreursPageModule {}
