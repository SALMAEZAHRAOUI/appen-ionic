import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajclientsPageRoutingModule } from './majclients-routing.module';

import { MajclientsPage } from './majclients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajclientsPageRoutingModule
  ],
  declarations: [MajclientsPage]
})
export class MajclientsPageModule {}
