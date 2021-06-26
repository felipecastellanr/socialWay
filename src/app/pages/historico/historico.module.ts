import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPageRoutingModule } from './historico-routing.module';

import { HistoricoPage } from './historico.page';
import { ContaPage } from '../conta/conta.page';
import { ContaPageModule } from '../conta/conta.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPageRoutingModule
  ],
  declarations: [HistoricoPage, ContaPage],
  exports:[HistoricoPage]
})
export class HistoricoPageModule {}
