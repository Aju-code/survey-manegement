import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false
    constructor(private router: Router,private service:ServicesService) {
  
     }
  
    ngOnInit(): void {
      console.log("this is login")
   
    }
  objloginform:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern( '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]),
  })
  login():void{
    // console.warn(this.objloginform.value)
    if (this.objloginform.valid) {
      this.alert=false
      sessionStorage.setItem("email",this.objloginform.value.email)
      sessionStorage.setItem("name",this.objloginform.value.name)
      this.service.getlogin(this.objloginform)
     
      // console.log(sessionStorage.getItem('username'));
    }
    else{
      this.alert=true
    }
    
  }
  }