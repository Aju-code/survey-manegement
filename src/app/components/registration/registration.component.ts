import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
countries: any;
  constructor(private service:ServicesService ,private router:Router) { }

  ngOnInit(): void {
    this.service.getCountry().subscribe({
      next: (response: any) => {
        console.log(response);
        this.countries = response;
      }, error(err) {
        console.log(err,"country is not fetched");

      },
    })
  }
  file:any
  onChange(event:any) {
    this.file = event.target.files[0];
}

  objregisterform=new FormGroup({
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    profile:new FormControl('',Validators.required),
  })

signin(){
  // let parameter = {
  //   first_name:this.objregisterform.controls['first_name'].value,
  //   last_name:this.objregisterform.controls['last_name'].value,
  //   email:this.objregisterform.controls['email'].value,
  //   password:this.objregisterform.controls['password'].value,
  //   dob:this.objregisterform.controls['dob'].value,
  //   gender:this.objregisterform.controls['gender'].value,
  //   country:this.objregisterform.controls['country'].value,
  //   profile:this.objregisterform.controls['profile'].value,
  
  // }

  let body = new FormData()

  body.append("first_name",this.objregisterform.controls['first_name'].value),
  body.append("last_name",this.objregisterform.controls['last_name'].value),
  body.append("email",this.objregisterform.controls['email'].value),
  body.append("password",this.objregisterform.controls['password'].value),
  body.append("dob",this.objregisterform.controls['dob'].value),
  body.append("gender",this.objregisterform.controls['gender'].value),
  body.append("country",this.objregisterform.controls['country'].value),
  body.append("profile",this.file)
 
this.service.getregister(body).subscribe({
  next:(response:any) => {
    console.log("print login",response)
    alert("Submitted successfully");
    this.router.navigate(['/login']);
  },
  error:(error:any)=>{
    console.log("error",error)
    alert("Enter valid value");
  }
  });
}
  }
