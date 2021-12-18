import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  public person:object = {
    name:"Shariq Khan",
    age:23
  }
  public arry = ['1','2','3']
  public date:Date = new Date()
}
