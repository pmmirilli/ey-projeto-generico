import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('authForm') authForm!: NgForm;

  requestedPasswordReset: boolean = false;
  isResettingPassword: boolean = false;

  /////
  isChecked: boolean | undefined;

  getCheckedState(state: boolean) {
    this.isChecked = state;
    console.log(state);
  }
  /////

  onForgotPassword() {
    this.requestedPasswordReset = true;
    console.log("Send email prompt.");
    console.log("Confirm existing email.");
    console.log("Send confirmation PIN.");
    console.log("Await PIN input.");
    console.log("Set isResettingPassword to true."); //
  }

  onRecoverCancel() {
    this.requestedPasswordReset = false;
  }

  onSubmit() {
    console.log('Form submitted.');
    console.log(this.authForm.value);
  }
}
