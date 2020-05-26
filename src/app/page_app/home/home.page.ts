import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Network} from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public state=true;
  constructor(private router:Router,private toast:ToastController,private network:Network,private alertController:AlertController) {
    this.network.onDisconnect().subscribe(()=>{
      this.state=false;
        this.alertConnection();
    });

    this.network.onConnect().subscribe(()=>{
      this.state=true;
    });
  }
  alertConnection() {
    if(!this.state){
      const alert = this.alertController.create({
        header: 'NOT FOUND',
        mode:'ios',
        message: 'THERE IS NO INTERNET CONNECTION!.',
        buttons: [{
          text:'Exit',
          handler:(()=>{
            this.routerHome();
          })}]
      });
      alert.then((data)=>{
        data.present();
      });
    }
  }

routerHome(){
  this.router.navigated = false;
  this.router.navigate(['/home']);
}
presentToast() {
    const toast = this.toast.create({
      message: '<center>Not Connection Internet',
      duration: 2000
    });
    toast.then((data)=>{
      data.present();
    });
  }
presentAlert() {
  const alert = this.alertController.create({
    header: 'App Information!',
    mode:'ios',
    message: 'Image stores, is an application to download the most beautiful images for your phone and place them as your mobile wallpaper, here are all kinds of images and are constantly updated so that our users stay happy. Just enter and download yours all for free. \n BY:<b>@DEV_EDRA_COMPANY',
    buttons: ['Exit']
    
  });
  alert.then((data)=>{
    data.present();
  });
}
}