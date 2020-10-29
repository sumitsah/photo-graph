import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';
import { PhotoComponent } from './photo.component';

const routes: Routes = [
    {
        path: '', component: PhotoComponent,
        children: [
            { path: '', redirectTo: 'image-upload', pathMatch: 'full' },
            { path: 'image-upload', component: ImageComponent },
            { path: 'image-list', component: ImageListComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhotoRoutingModule { }