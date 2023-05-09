import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
 
  constructor(
    private  authService: AuthService,
    private formBuilder: FormBuilder){
      this.form = this.formBuilder.group({
        password:['',[Validators.required, Validators.minLength(5)]],
        mail:['',[Validators.required, Validators.email]]
      })
    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get Password() {
    return this.form.get('password');
  }

  get Mail() {
    return this.form.get('mail');
  }

  getMailValid() {
    return false;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.form.markAllAsTouched();
    }
  }

  // login() {
  //   this.authService.login(this.Mail, this.Password)
  // }

}
