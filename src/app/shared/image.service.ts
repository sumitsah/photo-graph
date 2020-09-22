import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
  }

  deleteImage(imageKey) {
    this.imageDetailList.remove(imageKey)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  updateCaption(item) {
    this.imageDetailList.update(item.key, { caption: item.image['caption'] })
      .then(() => console.log('Caption updated!'))
      .catch(err => console.log(err));
  }
}

