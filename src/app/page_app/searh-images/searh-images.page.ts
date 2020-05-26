import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceImageService } from 'src/app/services/service-image.service';
import { ModalController } from '@ionic/angular';
import { ModalViewPage } from '../modal-view/modal-view.page';

@Component({
  selector: 'app-searh-images',
  templateUrl: './searh-images.page.html',
  styleUrls: ['./searh-images.page.scss'],
})
export class SearhImagesPage implements OnInit {  
  public images:any;
  public base_images:any;
  public typeImage:any;
  constructor(private modalController:ModalController, private sendRouter:ActivatedRoute, public service:ServiceImageService) { }

  ngOnInit() {
    this.getImages("backgrounds");
  }
  onChagesImg(SelectedValue){
    this.typeImage=SelectedValue.detail.value;
    this.getImages(SelectedValue.detail.value);
   }

  openViewImg(img){
    this.modalController.create({
      component:ModalViewPage,
      componentProps:{
        img:img
      }
    }).then(modal=>modal.present());
  }

  getImages(img_type?,event?){
    this.service.getImage(img_type).then(data=>{
       this.base_images=data;
       this.images=this.base_images.hits;
       event.target.complete();
    }).catch(data=>{
      console.log(data)
    })

  }

}
