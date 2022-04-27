import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('authForm') authForm!: NgForm; // Como funciona esse sinal?

  requestedPasswordReset: boolean = false;
  isResettingPassword: boolean = false;
  isSigningUp: boolean = false;
  passwordsMatch: boolean = false;

  constructor(private router: Router) { }

  onConfirmPassword(): boolean {
    if(this.authForm.value['confirm-password'] === this.authForm.value['password'] && this.isResettingPassword) {
      console.log('The provided passwords match.');
      return true;
    } else {
      console.log('The provided passwords DO NOT match.');
      return false;
    }
  }

  onForgotPassword() {
    this.requestedPasswordReset = true;
    console.log("Send email prompt.");
    console.log("Confirm existing email.");
    console.log("Send confirmation PIN.");
    console.log("Await PIN input.");
    console.log("Set isResettingPassword to true."); //
  }

  onForgotCancel() {
    this.requestedPasswordReset = false;
  }

  onAuthOk() {
    this.requestedPasswordReset = false;
    this.isResettingPassword = true;
  }

  onSignUp() {
    this.isSigningUp = true;
    console.log("Display new fields.");
  }

  onSubmit() {
    this.passwordsMatch = this.onConfirmPassword();
    console.log(this.passwordsMatch);

    console.log('Form submitted.');
    console.log(this.authForm.value);
  }
}
