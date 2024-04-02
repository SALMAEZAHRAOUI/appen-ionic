import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsclientsPageRoutingModule } from './consclients-routing.module';

import { ConsclientsPage } from './consclients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsclientsPageRoutingModule
  ],
  declarations: [ConsclientsPage]
})
export class ConsclientsPageModule {}
