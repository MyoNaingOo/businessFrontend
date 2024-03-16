import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  registerform: boolean = true
  eye: any = faEye
  eyeslash: any = faEyeSlash

  user: UserModule = {
    name: "",
    gmail: "",
    password: "",
    confirmpassword: ""
  }

  my_password: any
  my_confirmpassword: any



  showpassword: boolean = false


  register(f: NgForm) {

    console.log(f.value)
  }


  setRegisterForm(val: boolean) {
    this.registerform = val
  }

  login(f: NgForm) {

  }
}
