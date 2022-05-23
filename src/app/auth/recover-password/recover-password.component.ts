import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {

  @ViewChild('authForm') authForm!: NgForm;

  public displaySuccessPrompt: boolean = false;
  public passwordsOk: boolean = false;
  public password: string = '';

  constructor(private _router: Router, private _location: Location) { }

  // Get status from 'passwordsOk' property from NewPasswordComponent.
  getPasswordsOk(status: boolean): void {
    this.passwordsOk = status;
  }

  // Get password from 'password' property from NewPasswordComponent.
  getPassword(password: string): void {
    this.password = password;
  }

  onReturn(): void {
    this._location.back();
  }

  onSubmit(): void {
    if (this.passwordsOk) {
      this.displaySuccessPrompt = true;
    }
    ///////////// Wait for success prompt to close before navigating away. /////////
    // Write new password to user data. //////////////////////
    // this._router.navigate(['/auth/login']);
  }
}
