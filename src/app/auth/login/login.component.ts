import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('authForm') authForm!: NgForm;
  isResettingPassword: boolean = false;
  isSigningUp: boolean = false;
  passwordsMatch: boolean = false;

  onConfirmPassword(): boolean {
    if(this.authForm.value['confirm-password'] === this.authForm.value['password']) {
      console.log('The provided passwords match.');
      return true;
    } else {
      console.log('The provided passwords DO NOT match.');
      return false;
    }
  }

  onForgotPassword() {
    console.log("Send email prompt.");
    console.log("Confirm existing email.");
    console.log("Send confirmation PIN.");
    console.log("Await PIN input.");
    console.log("Set isResettingPassword to true.");
  }

  onSignUp() {
    console.log("Display new fields.");
    this.isSigningUp = true;
  }

  onSubmit() {
    this.passwordsMatch = this.onConfirmPassword();

    console.log('Form submitted.');
    console.log(this.authForm.value);
    console.log(this.passwordsMatch);
  }
}
