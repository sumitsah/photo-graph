import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';

@NgModule({
    imports: [
        CommonModule,
        PhotoRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [PhotoComponent, ImageListComponent, ImageComponent]
})
export class PhotoModule { }