import { Component, Input, OnInit } from '@angular/core';
import { CuriositySolService } from '../curiosity-sol.service';
import { MarsRoverPhotosService } from '../mars-rover-photos.service';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.component.html',
  styleUrls: ['./mars-rover-photos.component.css']
})
export class MarsRoverPhotosComponent implements OnInit {

  public curiosityData: any;
  public curiosityImageUrl: any;
  public curiositySol: any;

  constructor(private service: MarsRoverPhotosService, private solService: CuriositySolService) { }

  @Input()
  inputCuriositySol: any;

  ngOnInit(): void {
    this.solService.getLatestMissionUpdateData().subscribe(data => {
      let jsonObject = JSON.parse(JSON.stringify(data));
      if (this.inputCuriositySol) {
        this.curiositySol = this.inputCuriositySol
      }
      else {
        this.curiositySol = jsonObject.rover.max_sol;
      }
      // if (this.inputCuriositySol == "random") {
      //   this.curiositySol = Math.floor((Math.random() * jsonObject.rover.max_sol));
      // }

      console.log("SOL: " + this.curiositySol);
      this.service.getCuriosityPhotoForSol(this.curiositySol).subscribe(data => {
        this.curiosityData = data;
        let jsonObject = JSON.parse(JSON.stringify(this.curiosityData));
        this.curiosityImageUrl = jsonObject.photos[0].img_src;
      });
      // this.service.getCuriosityPhotoSol1000().subscribe(data => {
      //   this.curiosityData = data;
      //   let jsonObject = JSON.parse(JSON.stringify(this.curiosityData));
      //   this.curiosityImageUrl = jsonObject.photos[1].img_src;
      // })
    });

  }

}
