import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoComponent } from './photo/photo.component';
import { ImageListComponent } from './photo/image-list/image-list.component';
import { ImageComponent } from './photo/image/image.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'photos', component: PhotoComponent, children: [
      { path: 'image', component: ImageComponent },
      { path: 'image-list', component: ImageListComponent }
    ]
  },
  {path : 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }