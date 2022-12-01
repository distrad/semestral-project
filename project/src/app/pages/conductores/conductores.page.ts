import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-conductores',
  templateUrl: 'conductores.page.html',
  styleUrls: ['conductores.page.scss'],
})
export class ConductoresPage {

  usuarios: Usuario[] = [];

  constructor(private usuarioService:UsuarioService, private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController) {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(respuesta => {
      console.log(respuesta);
      this.usuarios = respuesta;
    });
  }

  async openDetailUsuario(usuario){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {id: usuario.id},
      breakpoints:[0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }

  async addUsuario(){
    const alert = await this.alertCtrl.create({
      header:'Add User',
      inputs:[
        {
          name:"rut",
          type:"text",
          placeholder:"rut"
        },
        {
          name:"nombreCompleto",
          type:"text",
          placeholder:"Nombre"
        },
        {
          name:"usuario",
          type:"text",
          placeholder:"User"
        },
        {
          name:"sexo",
          type:"text",
          placeholder:"Sexo"
        },
        {
          name:"anoNacimiento",
          type:"date",
          placeholder:"DD/MM/YYYY"
        },
        {
          name:"direccion",
          type:"text",
          placeholder:"direccion"
        },
        {
          name:"telefono",
          type:"number",
          placeholder:"Telefono"
        },
        {
          name:"email",
          type:"email",
          placeholder:"correo@correo.com"
        },
        {
          name:"image",
          type:"url",
          placeholder:"Link image"
        }
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler:(data) => {
            this.usuarioService.addUsuario(data);
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
