import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dig',
  templateUrl: './dig.component.html',
  styleUrls: ['./dig.component.css']
})
export class DigComponent implements OnInit {
  name = 'Angular 4';
  date:any;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;

  isTwelveHrFormat:false | undefined;
  test:any;

  constructor() {
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
       }, 1000);
   }
 
  ngOnInit(): void {
  }

}
