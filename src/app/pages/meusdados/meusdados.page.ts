import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.page.html',
  styleUrls: ['./meusdados.page.scss'],
})
export class MeusdadosPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
