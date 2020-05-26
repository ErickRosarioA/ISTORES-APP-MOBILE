import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./page_app/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'photos/:id',
    loadChildren: () => import('./page_app/photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    path: 'modal-view',
    loadChildren: () => import('./page_app/modal-view/modal-view.module').then( m => m.ModalViewPageModule)
  },
  {
    path: 'searh-images',
    loadChildren: () => import('./page_app/searh-images/searh-images.module').then( m => m.SearhImagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
