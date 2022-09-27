import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
// import { ViewquestionsComponent } from '../viewquestions/viewquestions.component';

@Component({
  selector: 'app-listsurvey',
  templateUrl: './listsurvey.component.html',
  styleUrls: ['./listsurvey.component.css']
})
export class ListsurveyComponent implements OnInit {

  constructor(private service:ServicesService,private router:Router) { }
  survey:any
  questions:any
  surveyId:any
  //list survey//
  ngOnInit(): void {
    this.service.surveylist().subscribe({
      next:(res:any) =>{
        console.log("check"+res);
        this.survey=res
      },
      error:(erar : any) =>{
        console.log(erar);
      }
    })
  }
  //delete survey//
  deleteSurvey(surveyid:any):void{
    this.service.deleteSurvey(surveyid).subscribe({
      next:(res:any) =>{
        console.log(res);
        window.location.reload();
      },
      error:(erar: any) =>{
        console.log(erar);
      }
    });
  }
  //update survey//
  updateSurvey(surveyid:any){
    this.surveyId=sessionStorage.setItem('surveyId',surveyid)
    this.service.getSurvey(surveyid).subscribe({
      next:(res:any)=>{
        this.survey=res;
        console.log(this.survey);
        this.router.navigate(['/updatesurvey'])
        
      },
      error:(erar:any)=>{
        console.log(erar);
      }
      
    });

  }
  //question view//
  viewQuestions(surveyid:any){
    this.surveyId=sessionStorage.setItem('surveyId',surveyid)
    this.service.getQuestions(surveyid).subscribe({
      next:(res:any)=>{
        this.questions=res;
        this.router.navigate(['/viewquestions']),
        console.log(this.survey);
      },
      error:(erar:any)=>{
        console.log(erar);
      }
    });
  }
 
  surveyview(surveyid:any)
  {
    this.surveyId=sessionStorage.setItem('surveyId',surveyid)
    this.router.navigate(['/survey']);
  }
}

