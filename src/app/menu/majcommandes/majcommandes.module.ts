import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajcommandesPageRoutingModule } from './majcommandes-routing.module';

import { MajcommandesPage } from './majcommandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajcommandesPageRoutingModule
  ],
  declarations: [MajcommandesPage]
})
export class MajcommandesPageModule {}
