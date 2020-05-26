import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {Downloader, DownloadRequest,NotificationVisibility,DestinationDirectory,DownloadHttpHeader} from '@ionic-native/downloader/ngx';
@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.page.html',
  styleUrls: ['./modal-view.page.scss'],
})
export class ModalViewPage implements OnInit {
  public img:any;
  public dataV:any;
  public dataV_1:any;
  constructor(private downloader:Downloader,private alertController:AlertController,private transfer:FileTransfer,private navParams: NavParams,private modalController:ModalController, private file:File, private AndroidPermissions: AndroidPermissions) { }
  ngOnInit() {
    this.img=this.navParams.get('img');
  }

  closeModal(){
    this.modalController.dismiss();
  }
  download(img){
    var object= img;
    this.AndroidPermissions.hasPermission(this.AndroidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    .then(status => {
      if (status.hasPermission) {
        this.veriFy(object);
      } 
      else {
        this.AndroidPermissions.requestPermission(this.AndroidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
          .then(status => {
            if(status.hasPermission) {
             this.veriFy(object);
            }
          });
      }
    });
}

veriFy(img){
  const request:DownloadRequest={
    uri:img.largeImageURL,
    title:img.id.toString()+'_img.jpg',
    description:"Images Store Downloading By: @Dev_EDRA.",
    mimeType:'image/jpg/png',
    visibleInDownloadsUi:true,
    notificationVisibility:NotificationVisibility.VisibleNotifyCompleted,
    destinationInExternalPublicDir:{
      dirType:'Download_Istore',
      subPath:img.id.toString()+'_img.jpg'
    }
  };

  this.downloader.download(request).then(()=>{
    this.presentAlert(location);
  },(err)=>{
    const alert = this.alertController.create({
      header: 'ERROR! Download',
      mode:'ios',
      message: JSON.stringify(err).toString(),
      buttons: ['OK'],
      cssClass:'alertPush'
    });
    alert.then((data)=>{
      data.present();
    });
  });
}

presentAlert(location) {
  const alert = this.alertController.create({
    header: 'GOOD! Download Processed',
    mode:'ios',
    message: 'The image has been downloaded to your device and.\n'+location,
    buttons: ['OK'],
    cssClass:'alertPush'
  });

  alert.then((data)=>{
    data.present();
  });

}
}
