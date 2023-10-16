import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  status:boolean = true;
  currentImgSrc:string = '';

  imgSources:string[] = [
    "../../assets/images/poert1.png",
    "../../assets/images/port2.png",
    "../../assets/images/port3.png",
    "../../assets/images/poert1.png",
    "../../assets/images/port2.png",
    "../../assets/images/port3.png"
  ]

  sendSrc(src:string):void {
    this.currentImgSrc = src;
    this.status = false;
  }
  changeStatus():void {
    this.status = true;
  }

}
