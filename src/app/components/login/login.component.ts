import { HttpClient,HttpHeaders} from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   form!:FormGroup;

    HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
  };
 
   

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router:Router, private authService:AuthService) { }
 
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username:'',
      password:''
    });
  }
  submit():void{
   /* this.http.post('http://localhost:3000/auth/login', this.form.getRawValue(),this.HTTP_OPTIONS)
    .subscribe(()=> this.router.navigate(['dashboard']));*/
    this.authService.singin(this.form.getRawValue())
    .subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem('token',res.token);
    });
    
    
    //console.log(this.form.getRawValue());
  }

}
