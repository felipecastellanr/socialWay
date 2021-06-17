import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HistoricoPage } from '../historico/historico.page';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }


  async showModalHistorico(){
    const modal = await this.modalCtrl.create({
      component: HistoricoPage
    })
    modal.present();
  }

  ngOnInit() {
  }
  
}
