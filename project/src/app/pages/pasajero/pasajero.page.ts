import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/services/viaje';
import { ViajeService } from 'src/app/services/viaje.service';
import { ModalPage } from '../modal/modal.page';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  viajes: Viaje[] = [];

  constructor(private viajeService:ViajeService, private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController) {
    this.getViajes();
  }

  getViajes(){
    this.viajeService.getViajes().subscribe(respuesta => {
      console.log(respuesta);
      this.viajes = respuesta;
    });
  }


  ngOnInit() {
  }

}
