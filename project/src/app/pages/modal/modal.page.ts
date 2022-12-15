import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Viaje } from 'src/app/services/viaje';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id: string;
  viaje: Viaje = null;

  constructor(private viajeService:ViajeService, private modalCtrl: ModalController,
    private toastCtrl:ToastController, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.getViaje();;
  }

  getViaje(){
    this.viajeService.getViajeById(this.id).subscribe(respuesta => {
      this.viaje = respuesta;
    });
  }

  async updateViaje(){
    this.viajeService.updateViaje(this.viaje);
    this.modalCtrl.dismiss();
    this.toasPresent('viaje updated!!!');
  }

  async deleteViaje(){
    const alert = await this.alertCtrl.create({
      header:'Mensajes',
      message:'Estas seguro que deseas eliminar al viaje?',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Confirm',
          role:'confirm',
          handler:() => {
            this.viajeService.deleteViaje(this.viaje);
            this.modalCtrl.dismiss();
            this.toasPresent('Viaje deleted!!!');
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
