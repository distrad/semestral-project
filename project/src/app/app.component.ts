import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/pages/shared/authentication-service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  profile:any=null;

  constructor(
    private loadingCtrl:LoadingController,
    private router:Router,
    public authService: AuthenticationService
    ){
    }




  
}
