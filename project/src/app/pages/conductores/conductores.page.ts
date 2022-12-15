import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Viaje } from 'src/app/services/viaje';
import { ViajeService } from 'src/app/services/viaje.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-conductores',
  templateUrl: 'conductores.page.html',
  styleUrls: ['conductores.page.scss'],
})
export class ConductoresPage {
  
  viajes: Viaje[] = [];

  constructor(private usuarioService:ViajeService, private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController) {
    this.getViajes();
  }
  getViajes(){
    this.usuarioService.getViajes().subscribe(respuesta => {
      console.log(respuesta);
      this.viajes = respuesta;
    });
  }

  async openDetailViaje(viaje){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {id: viaje.id},
      breakpoints:[0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }

  async addViaje(){
    const alert = await this.alertCtrl.create({
      header:'Publicar viaje',
      inputs:[
        {
          name:"titulo",
          type:"text",
          placeholder:"Titulo"
        },
        {
          name:"descripcion",
          type:"text",
          placeholder:"Comuna destino"
        },
        {
          name:"espacioDisponible",
          type:"number",
          placeholder:"Espacio con el que cuentas"
        },
        {
          name:"valorPersona",
          type:"number",
          placeholder:"valor a pagar por persona"
        },
        {
          name:"contacto",
          type:"text",
          placeholder:"Contacto(instagram, num telefono)"
        },

      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Publicar',
          role:'confirm',
          handler:(data) => {
            this.usuarioService.addViaje(data);
            this.toasPresent('User added!!!');
          }
        }
      ]
    });
    alert.present();
  }

  async toasPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }

}


