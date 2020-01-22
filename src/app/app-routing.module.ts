import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImagesGridViewComponent } from './pages/images-grid-view/images-grid-view.component';
import { ImageDetailsViewComponent } from './pages/image-details-view/image-details-view.component';

const appRoutes: Routes = [
  { path: 'gallery', component: ImagesGridViewComponent },
  { path: 'image-detail/:id', component: ImageDetailsViewComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
