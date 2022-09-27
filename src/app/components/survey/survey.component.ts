import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyId: any;
  questions: any;
s: any;
signin() {
throw new Error('Method not implemented.');
}

  constructor(private service:ServicesService ,private router:Router) { }

  ngOnInit(): void {
    this.surveyId=sessionStorage.getItem('surveyId')
    this.service.getQuestions(this.surveyId).subscribe({
      next:(res:any) =>{
        console.log("check"+res);
        this.questions=res
      },
      error:(erar : any) =>{
        console.log(erar);
      }
    })
  }

    objanswer=new FormGroup({
    answer:new FormControl('',Validators.required)
  })
  submit(){
    let parameter = {
      answer:this.objanswer.controls['answer'].value
    }
    this.service.getanswer(parameter).subscribe({
      next:(response:any) => {
        console.log("print survey",response)
        alert("Submitted successfully");
        window.location.reload();
        this.router.navigate(['/survey']);
      },
      error:(error:any)=>{
        console.log("error",error)
        alert("Please Enter Answer");
      }
      });
    }
}
