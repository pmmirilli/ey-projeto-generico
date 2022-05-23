import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/models/auth/user/user.model';
import { Person } from 'src/app/models/auth/person/person.model';
import { Log } from 'src/app/models/auth/log/log.model';
import { AuthLogService } from 'src/app/services/auth/auth-log.service';
import { AuthPersonService } from 'src/app/services/auth/auth-person.service';
import { AuthUserService, UserErrorMessage, UserSuccessMessage } from 'src/app/services/auth/auth-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('userForm') userForm!: NgForm;

  public email: string = this._personService.email;
  public passwordsOk: boolean = false;
  public password: string = '';

  constructor(
    private _location: Location,
    private _router: Router,
    private _userService: AuthUserService,
    private _personService: AuthPersonService,
    private _logService: AuthLogService
  ) { }

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
    const login: string = this.userForm.value.login;
    this._logService.create(login);
    const person: Person | null = this._personService.read(this.email);
    const log: Log | null = this._logService.read(login);

    let createUser: string = '';

    if (person && log) {
      const user: User = new User(login, this.password, person, log);
      console.log(user); /////////////////////////////////////
      createUser = this._userService.create(user);
    }

    if (!createUser) {
      console.log(UserErrorMessage.UserDenied); /////////////////
      return;
    }
    console.log(UserSuccessMessage.UserCreated); /////////////
    this._router.navigate(['/auth/login']);
  }
}
