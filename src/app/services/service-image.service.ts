import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ServiceImageService {

  public request:any;
  constructor(public http:HttpClient) { }


  getImage(img_type){
    var apiUrl="https://pixabay.com/api/?key=12306072-874f8c547eb07afb2d0219d3d&&category="+img_type+"&per_page=100"
    return new Promise(resolve=>{
      this.http.get(apiUrl).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      });
    });
  }

}
