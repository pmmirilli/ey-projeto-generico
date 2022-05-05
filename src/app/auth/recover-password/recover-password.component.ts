import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  @ViewChild('authForm') authForm!: NgForm;

  passwordsMatch: boolean = false;

  constructor(private router: Router) { }

  onConfirmPassword(): boolean {
    if(this.authForm.value['confirm-password'] === this.authForm.value['password']) {
      console.log('The provided passwords match.');
      return true;
    } else {
      console.log('The provided passwords DO NOT match.');
      return false;
    }
  }

  onSubmit() {
    this.passwordsMatch = this.onConfirmPassword();
    console.log(this.passwordsMatch);

    if (this.onConfirmPassword()) {
      console.log('Form submitted.');
      this.router.navigate(['auth/login']);
    }
    console.log(this.authForm.value);
  }
}
