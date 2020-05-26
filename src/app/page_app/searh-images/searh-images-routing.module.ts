import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearhImagesPage } from './searh-images.page';

const routes: Routes = [
  {
    path: '',
    component: SearhImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearhImagesPageRoutingModule {}
