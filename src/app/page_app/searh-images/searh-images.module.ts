import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearhImagesPageRoutingModule } from './searh-images-routing.module';

import { SearhImagesPage } from './searh-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearhImagesPageRoutingModule
  ],
  declarations: [SearhImagesPage]
})
export class SearhImagesPageModule {}
