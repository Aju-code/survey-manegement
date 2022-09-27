import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  raw: any = {};
  userId: any;

  countries: any;

  constructor(private service: ServicesService,private router:Router) { }

  ngOnInit(): void {
    this.ViewUser()
    this.service.getCountry().subscribe({
      next: (response: any) => {
        this.countries = response;
      }, error(err) {
        console.log(err);

      },
    })
  }
  ViewUser() {
    this.userId = localStorage.getItem('viewuserId')
    this.service.getuserid(this.userId).subscribe({
      next: (data: any) => {
        if (data) {
          this.raw = data
        }
      },
      error: (error: any) => console.log(error)
    })

  }

  logout():void{
    sessionStorage.clear()
    console.warn("error")
    this.router.navigate(["/login"])
    .then(() =>{
      window.location.reload();
    });  
  }

  gender(gender: number): string {

    if (gender == 0) {
      return "Male"
    } else if(gender==1) {
      return "Female"
    }else{
      return "Others"
    }
  }
}


