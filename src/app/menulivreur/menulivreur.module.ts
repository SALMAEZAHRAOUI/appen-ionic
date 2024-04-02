import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenulivreurPageRoutingModule } from './menulivreur-routing.module';

import { MenulivreurPage } from './menulivreur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenulivreurPageRoutingModule
  ],
  declarations: [MenulivreurPage]
})
export class MenulivreurPageModule {}
