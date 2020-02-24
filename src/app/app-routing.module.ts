import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'photos/:id',
    loadChildren: () => import('./page/photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    path: 'modal-view',
    loadChildren: () => import('./page/modal-view/modal-view.module').then( m => m.ModalViewPageModule)
  },
  {
    path: 'searh-images',
    loadChildren: () => import('./page/searh-images/searh-images.module').then( m => m.SearhImagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
