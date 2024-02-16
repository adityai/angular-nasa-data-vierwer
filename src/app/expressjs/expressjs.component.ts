import { Component, Input, OnInit } from '@angular/core';
import { ExpressjsService } from '../expressjs.service'

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {

  public value: any;

  constructor(private service: ExpressjsService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
        console.log("Data: " + data);
        let jsonObject = JSON.parse(JSON.stringify(data));
        this.value = jsonObject.hello;
    });
  }

}
