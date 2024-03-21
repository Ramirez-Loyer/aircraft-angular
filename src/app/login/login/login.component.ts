import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService){};

myForm = this.formBuilder.group({
  email : ['', Validators.required],
  password : ['', Validators.required]
 })

 onLogin(){
 
  const {email, password}=this.myForm.value
  const users = this.authService.getUser(email)
 console.log(users.forEach(user=>console.log(user)))
 };
  


}
    
  


