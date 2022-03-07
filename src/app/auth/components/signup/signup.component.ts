import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmitClicked() {
    if(this.signupFormGroup.invalid) {
      this.signupFormGroup.markAllAsTouched();
      return;
    }
    this.authService.signup({
      username: this.signupFormGroup.value.username,
    });
  }

  get usernameFormControl() {
    return this.signupFormGroup.get('username');
  }

  get passwordFormControl() {
    return this.signupFormGroup.get('password');
  }

}
