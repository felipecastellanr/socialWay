import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComentariosPage } from '../comentarios/comentarios.page';

@Component({
  selector: 'app-estab',
  templateUrl: './estab.page.html',
  styleUrls: ['./estab.page.scss'],
})
export class EstabPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  async showModalComentario(){
    const modal = await this.modalCtrl.create({
      component: ComentariosPage
    })
    modal.present();
  }

  ngOnInit() {
  }

}
