import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ServiceImageService} from '../../services/service-image.service'
import { ModalController } from '@ionic/angular';
import { ModalViewPage } from '../modal-view/modal-view.page';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public id:number;
  public title:string;
  public type:string;
  public images:any;
  public base_images:any;
  constructor(private modalController:ModalController,  private sendRouter:ActivatedRoute, public service:ServiceImageService) { }


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

  ngOnInit() {
    // this.imageO=[1,2,3,4,5,6,7,8,9,10];
    this.id=Number(this.sendRouter.snapshot.paramMap.get('id'));
    switch(this.id){
      case 1:
        this.title="Search Images";
        this.type="search";
        break;
      case 2:
        this.title="News Images";
        this.type="New";
        this.getImages("all");
        break;
      case 3:
        this.title="Cars Images";
        this.type="cars";
        this.getImages("transportation");
        break;
      case 4:
        this.title="Animals Images";
        this.type="animals";
        this.getImages("animals");
        break;
      case 5:
        this.title="Religions Images";
        this.type="Religion";
        this.getImages("religion");
        break;
        case 6:
          this.title="Computers Images";
          this.type="Computer";
          this.getImages("computer");
          break;
      default:
        console.log("not file menu");
        break;
    }
  }  

}
