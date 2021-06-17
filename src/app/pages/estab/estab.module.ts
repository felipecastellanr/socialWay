import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstabPageRoutingModule } from './estab-routing.module';

import { EstabPage } from './estab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstabPageRoutingModule
  ],
  declarations: [EstabPage]
})
export class EstabPageModule {}
