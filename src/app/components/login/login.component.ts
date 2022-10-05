import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  logreg:boolean=true;
  email:any;
  password:any;
  bgColor:string="#757373";

  constructor(private fb:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log("Valid data", this.loginForm.value);
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.pass
      }
      this.user.login(data).subscribe((result:any)=>{
        console.log(result);
    })
    } 
    else{
      console.log("Invalid data", this.loginForm.value);
      // this.snackbar.open("login again", "", { duration: 3000 });
    }
  }
  login(){
    this.logreg=true;
    this.bgColor="#757373";
  }
  
  register(){
    this.logreg=false;
    this.bgColor="#afacac";
  }

}
