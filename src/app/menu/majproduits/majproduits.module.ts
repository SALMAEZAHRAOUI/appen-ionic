import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajproduitsPageRoutingModule } from './majproduits-routing.module';

import { MajproduitsPage } from './majproduits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajproduitsPageRoutingModule
  ],
  declarations: [MajproduitsPage]
})
export class MajproduitsPageModule {}
