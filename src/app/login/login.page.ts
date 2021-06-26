import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  private loading: any;
  

  constructor(
    private LoadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login(){
    await this.presentLoading();



    try {
      await this.authService.login(this.userLogin)

      this.router.navigate(['/tabs/home']);

    } catch (error) {
      console.log(error)
      this.presentToast(error.message)
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.LoadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, aguarde...',
    });
    return this.loading.present();
  }
  
  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
