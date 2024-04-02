import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConscommandesPageRoutingModule } from './conscommandes-routing.module';

import { ConscommandesPage } from './conscommandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConscommandesPageRoutingModule
  ],
  declarations: [ConscommandesPage]
})
export class ConscommandesPageModule {}
