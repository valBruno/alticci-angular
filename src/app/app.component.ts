import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : HttpClient) {}
  title = 'alticci-angular';
  number = {value: null};
  calcutated = 0;
  isEmpty = true;
  numberChanged = true;

  calcAlticci() {
    this.http.get('http://localhost:8080/alticci/' + this.number.value).subscribe((data: any) => {
      console.log(data)
      this.calcutated = data;
      this.numberChanged = false;
    });
  }
}
