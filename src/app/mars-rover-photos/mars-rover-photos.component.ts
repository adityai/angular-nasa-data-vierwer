import { Component, OnInit } from '@angular/core';
import { MarsRoverPhotosService } from '../mars-rover-photos.service';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.component.html',
  styleUrls: ['./mars-rover-photos.component.css']
})
export class MarsRoverPhotosComponent implements OnInit {

  public curiosityData: any;

  constructor(private service: MarsRoverPhotosService) { }

  ngOnInit(): void {
    this.service.getCuriosityPhotoSol1000().subscribe(data => {
      this.curiosityData = data;
    });
  }

}
