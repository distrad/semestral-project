import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading :HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) { }
  ngOnInit(): void {
    this.cargarLoading('Bienvenido');
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    this.cargarLoading('Hasta pronto')
    console.log('OnDestroy');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  cargarLoading(message: string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }

}
