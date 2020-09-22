import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  imageList: any[];
  selectedImage: number;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map((item) => ({
          image: item.payload.val(),
          key: item.key
        }));
        // this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length/3)).keys());
      }
    )
  }

  deleteImage(imageDetails: any) {
    this.imageService.deleteImage(imageDetails);
  }

  update(item) {
    this.imageService.updateCaption(item);
    this.selectedImage = null;
  }

  showInput(index) {
    this.selectedImage = index;
  }
}
