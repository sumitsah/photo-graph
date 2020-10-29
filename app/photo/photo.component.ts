import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.service.getImageDetailList();
  }

}
