import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { UserLoginAction } from 'src/app/ngrx/aircrafts.action';
import { AuthenticateService } from 'src/app/services/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private store : Store){};

myForm = this.formBuilder.group({
  email : ['', Validators.required],
  password : ['', Validators.required]
 })

 onLogin() {
  console.log("HELLO LOGIN")
  const { email, password } = this.myForm.value;
  const user = this.myForm.value
  // this.authService.getUser(email).pipe(
  //   map(user => {
  //     console.log(user); // Affiche l'utilisateur dans la console
  //     // Vous pouvez effectuer d'autres traitements avec l'utilisateur ici
  //     return user; // Nous devons renvoyer l'utilisateur pour continuer le flux
  //   })
  // )
  console.log(this.authService.getUser(user).subscribe(value => console.log(value)))
  this.store.dispatch(new UserLoginAction(user))
}

  


}
    
  


