import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivreursPageRoutingModule } from './livreurs-routing.module';

import { LivreursPage } from './livreurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreursPageRoutingModule
  ],
  declarations: [LivreursPage]
})
export class LivreursPageModule {}
