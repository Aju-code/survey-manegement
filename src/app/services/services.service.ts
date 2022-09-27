import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  accessToken: any;
  apiurl = environment.apiurl;
  public data : any;

  constructor(private router: Router, private http: HttpClient) { }

  getlogin(info: any) {
    this.http.post(`http://localhost:8080/login`, info.value).subscribe({
      next: (response: any) => {
        sessionStorage.setItem('accessToken', response.accessToken.value);
        sessionStorage.setItem('refreshToken', response.refreshToken.value);
        sessionStorage.setItem('name', response.name);
        console.log("accessToken", sessionStorage.getItem('accessToken'))
        console.log("response", response.refreshToken.value)
        console.log("Accesstoken", response.accessToken.value)
        alert("Successfully Logged in")
        if (sessionStorage.getItem('name') != null) { 
          this.router.navigate(['user']) 
        }
      },
     
      error: (error: any) => alert("please enter valid username or password")
    });
  }

  getregister(register: any) { return this.http.post("http://localhost:8080/users", register) }

  getanswer(con: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Contacts ' + sessionStorage.getItem('accessToken') }) }; console.log("this is get userId con =",con)
    return this.http.post("http://localhost:8080/answer",con, httpOptions) 
  }

  getuserid(con: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Contacts ' + sessionStorage.getItem('accessToken') }) }; 
    return this.http.get("http://localhost:8080/users/7", httpOptions)
  }
  getCountry() {
    return this.http.get("http://localhost:8080/country")
  }
  
surveylist() {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Contacts ' + sessionStorage.getItem('accessToken') }) };
  return this.http.get("http://localhost:8080/survey", httpOptions);
  window.location.reload();
}
deleteSurvey(surveyid: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Admin ' + sessionStorage.getItem('accessToken')
    })
  }
  return this.http.put(this.apiurl + "/survey/" + surveyid, this.data, httpOptions)
}
getSurvey(surveyid: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Admin ' + sessionStorage.getItem('accessToken')
    })
  }
  return this.http.get(this.apiurl + "/survey/" + surveyid, httpOptions)
}
getQuestions(surveyid: any) {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Contacts ' + sessionStorage.getItem('accessToken') }) };
  return this.http.get("http://localhost:8080/question/" + surveyid, httpOptions)

}


  
}
