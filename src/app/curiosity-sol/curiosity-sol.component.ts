import { Component, OnInit } from '@angular/core';
import { CuriositySolService } from '../curiosity-sol.service';

@Component({
  selector: 'app-curiosity-sol',
  templateUrl: './curiosity-sol.component.html',
  styleUrls: ['./curiosity-sol.component.css']
})
export class CuriositySolComponent implements OnInit {

  public curiositySol: any;

  constructor(private service: CuriositySolService) { }

  ngOnInit(): void {
    this.service.getLatestMissionUpdateData().subscribe(data => {
      this.curiositySol = data;
    });
  }

}
