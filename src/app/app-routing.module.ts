import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigComponent } from './components/dig/dig.component';
import { HomeComponent } from './components/home/home.component';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { ListsurveyComponent } from './components/listsurvey/listsurvey.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  // pathMatch use prifix
{ path:"",component:LoginComponent,pathMatch:"full" },
{ path:"home",component:HomeComponent,pathMatch:"full" },
{ path:"login",component:LoginComponent,pathMatch:"full" },
{ path:"user",component:HomeuserComponent,pathMatch:"full" },
{ path:"registration",component:RegistrationComponent,pathMatch:"full"},
{ path:"survey",component:SurveyComponent,pathMatch:"full" },
{ path:"listsurvey",component:ListsurveyComponent,pathMatch:"full"},
{ path:"digital",component:DigComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
