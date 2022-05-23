import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('authForm') authForm!: NgForm;

  public requestedPasswordReset: boolean = false;
  public isResettingPassword: boolean = false;

  constructor(private _router: Router) { }

  ///// GETS CHECHED STATE FROM CHECKBOX /////
  isChecked: boolean | undefined;

  getCheckedState(state: boolean) {
    this.isChecked = state;
  }
  ///// - /////

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
    console.log(this.authForm.value); ///// /////

    this._router.navigate(['/']);
  }

  onRegister() {
    this._router.navigate(['/auth/person-data']);
  }
}
