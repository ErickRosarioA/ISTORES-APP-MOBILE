import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalViewPage } from './modal-view.page';

const routes: Routes = [
  {
    path: '',
    component: ModalViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalViewPageRoutingModule {}
