import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajfournisseursPageRoutingModule } from './majfournisseurs-routing.module';

import { MajfournisseursPage } from './majfournisseurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajfournisseursPageRoutingModule
  ],
  declarations: [MajfournisseursPage]
})
export class MajfournisseursPageModule {}
