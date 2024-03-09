import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-yfi',
  templateUrl: './yfi.component.html',
  styleUrls: ['./yfi.component.css']
})
export class YfiComponent {
  private url = "http://localhost:3000/users";
  public data: any;
  public symbol: any;
  public price: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      this.getData();
    }, 240000);
  }

  getData() {
    this.http.get<any>(this.url).subscribe(data => {
      console.log(data);
      this.data = data;
      this.price = data['chart']['result'][0]['meta']['regularMarketPrice'];
    });
  }
}
