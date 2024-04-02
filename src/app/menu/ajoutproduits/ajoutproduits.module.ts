import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutproduitsPageRoutingModule } from './ajoutproduits-routing.module';

import { AjoutproduitsPage } from './ajoutproduits.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutproduitsPageRoutingModule
  ],
  declarations: [AjoutproduitsPage]
})
export class AjoutproduitsPageModule {}
