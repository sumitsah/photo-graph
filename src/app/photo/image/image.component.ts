import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from 'src/app/shared/image.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgSrc: string;
  selectedImage : any = null;
  formTemplate = new FormGroup({
    caption : new FormControl('', Validators.required),
    category : new FormControl(''),
    imageUrl : new FormControl('', Validators.required)
  }) 
  constructor(private storage: AngularFireStorage,
              private service: ImageService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.getImageDetailList();
  }

  showPreview(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => this.imgSrc = event.target.result.toString();      // called once readAsDataURL is completed
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedImage = event.target.files[0];
    }else{
      this.imgSrc = './assets/addImage.png';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue){
    if(this.formTemplate.valid){
      var filePath = `${formValue.category}/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['imageUrl'] = url;
              this.service.insertImageDetails(formValue);
              this.resetForm();
            })
          })
        )
        .subscribe();
    }
  }

  get formControls(){
    return this.formTemplate['controls'];
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'Animal'
    });
    this.imgSrc = './assets/addImage.png';
    this.selectedImage = null;
  }

}
