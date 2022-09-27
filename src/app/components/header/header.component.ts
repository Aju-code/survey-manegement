import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any=sessionStorage.getItem('name');
  constructor(private router:Router) { }

  ngOnInit(): void {
console.log("hello")
// this.user="gbhdb"
    // this.user=sessionStorage.getItem('name');
    console.log("name",sessionStorage.getItem('name'))
    

  }
  // var getsession = window.sessionStorage.getItem("name");
  logout():void{
    sessionStorage.clear()
    console.warn("error")
    this.router.navigate(["/login"])
    .then(() =>{
      window.location.reload();
    });  
  }

//   login():void{
//     window.location.reload()
// this.router.navigate(["/dashboard"]);

//   }
}
function then(arg0: () => void) {
  throw new Error('Function not implemented.');
}

