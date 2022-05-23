import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthPasswordService, PwErrorCode } from 'src/app/services/auth/auth-password.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  @ViewChild('passwordForm') passwordForm!: NgForm;

  @Output() passwordsOk: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() password: EventEmitter<string> = new EventEmitter<string>();

  public passwordValid: boolean = false;
  public passwordsMatch: boolean = false;

  public errorDoNotMatch: string = PwErrorCode.DoNotMatch;
  public errorInvalid: string = PwErrorCode.InvalidPassword;

  public passwordRequirements: string = this._passwordService.passwordRequirements;
  public passwordPattern: string = this._passwordService.passwordPattern;

  constructor(private _passwordService: AuthPasswordService) { }

  onValidatePassword(password: string): void {
    this.passwordValid = this._passwordService.checkPasswordValidity(password);
    this.emitPasswordOk();
  }

  onComparePasswords(): void {
    const newPassword = this.passwordForm.value['new-password'];
    const confirmPassword = this.passwordForm.value['confirm-password'];
    this.passwordsMatch = this._passwordService.comparePasswords(newPassword, confirmPassword);
    this.emitPasswordOk();
  }

  emitPasswordOk() {
    const isOk = this.passwordValid && this.passwordsMatch;
    this.passwordsOk.emit(isOk);
    if (isOk) {
      this.password.emit(this.passwordForm.value['new-password']);
    }
  }
}
