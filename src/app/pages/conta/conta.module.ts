import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaPageRoutingModule } from './conta-routing.module';

import { ContaPage } from './conta.page';
import { HistoricoPage } from '../historico/historico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaPageRoutingModule
  ],
  declarations: [ContaPage, HistoricoPage],
  entryComponents: [HistoricoPage]
})
export class ContaPageModule {}
