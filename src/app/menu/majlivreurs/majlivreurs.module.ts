import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajlivreursPageRoutingModule } from './majlivreurs-routing.module';

import { MajlivreursPage } from './majlivreurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajlivreursPageRoutingModule
  ],
  declarations: [MajlivreursPage]
})
export class MajlivreursPageModule {}
