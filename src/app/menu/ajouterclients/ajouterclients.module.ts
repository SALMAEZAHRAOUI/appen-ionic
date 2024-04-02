import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterclientsPageRoutingModule } from './ajouterclients-routing.module';

import { AjouterclientsPage } from './ajouterclients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterclientsPageRoutingModule
  ],
  declarations: [AjouterclientsPage]
})
export class AjouterclientsPageModule {}
