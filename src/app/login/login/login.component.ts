import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  
  }

  constructor(private formBuilder: FormBuilder){};

myForm = this.formBuilder.group({
  email : ['', Validators.required],
  password : ['', Validators.required]
 })

 onLogin(){
  const {email, password}=this.myForm.value

  console.log(email);
  console.log(password);
 };
  


}
    
  


