import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-conductores',
  templateUrl: 'conductores.page.html',
  styleUrls: ['conductores.page.scss'],
})
export class ConductoresPage {


  constructor(private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController) {
    
  }



  
}
