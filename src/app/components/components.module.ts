import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HomeMenuComponent} from './home-menu/home-menu.component';
import { HomePageModule } from '../page/home/home.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HomeMenuComponent]
    ,
  exports:[
    HomeMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
