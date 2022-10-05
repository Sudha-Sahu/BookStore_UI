import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name:string='';
  phonenum:string='';
  email:string='';
  password:string='';

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  submit(){
    let data={
      'first_name': this.name,
      'username': this.phonenum,
      'email': this.email,
      'password': this.password,
      'confirm_password': this.password
    }
    console.log('API call')
    this.user.register(data).subscribe(res=>{
      console.log(res);
    })
  }

}
