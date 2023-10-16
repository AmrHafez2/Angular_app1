import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  print() {
    console.log("you pressed a button")
  }
  text:string = "toto"
  age:number = 30;
  users:any[] = [
    
  ]

}
