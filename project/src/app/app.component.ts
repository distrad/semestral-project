import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  profile:any=null;

  constructor(private authService: AuthService,
    private loadingCtrl:LoadingController,
    private router:Router,
    private geolocation: Geolocation
    ){
      this.getGeolocation();
    }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {

      console.log("resp", resp)
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });



  }
}
