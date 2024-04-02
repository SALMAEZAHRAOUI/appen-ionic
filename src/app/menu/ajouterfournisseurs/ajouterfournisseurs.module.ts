import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterfournisseursPageRoutingModule } from './ajouterfournisseurs-routing.module';

import { AjouterfournisseursPage } from './ajouterfournisseurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterfournisseursPageRoutingModule
  ],
  declarations: [AjouterfournisseursPage]
})
export class AjouterfournisseursPageModule {}
