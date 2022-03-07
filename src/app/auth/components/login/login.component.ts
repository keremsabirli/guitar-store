import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.passwordFormControl?.errors);
  }

  onSubmitClicked() {
    if(this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
      return;
    }
    this.authService.login({
      username: this.loginFormGroup.value.username,
    })
  }

  get usernameFormControl() {
    return this.loginFormGroup.get('username');
  }

  get passwordFormControl() {
    return this.loginFormGroup.get('password');
  }

}
