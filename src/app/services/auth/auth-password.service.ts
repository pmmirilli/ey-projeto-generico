import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthPasswordService {

  // ^(?=.*?[A-Z]) At least one upper case letter <- Not included.
  // (?=.*?[a-z]) At least one lower case letter.
  // (?=.*?[0-9]) At least one digit.
  // (?=.*?[#?!@$%^&*-]) At least one special character <- Not included.
  // .{4,20}$ Minimum 4, maximum 20 characters.
  public passwordPattern: string = '^(?=.*?[a-z])(?=.*?[0-9]).{4,20}$';
  public passwordRegExp: RegExp = new RegExp(this.passwordPattern);
  public passwordRequirements: string = 'As senhas devem ter de 4 a 20 caracteres e possuir pelo menos uma minúscula e um número. Ambas devem ser idênticas.' // 'The passwords must be 4 to 20 characters long and have at least one lowercase letter and one digit. Both must be identical.'

  public comparePasswords(password1: string, password2: string): boolean {
    return password1 === password2;
  }

  public checkPasswordValidity(password: string): boolean {
    return this.passwordRegExp.test(password);
  }
}

export enum PwErrorCode {
  DoNotMatch = 'As senhas fornecidas nos dois campos devem ser idênticas.', // 'The passwords provided in both fields must be identical.'
  InvalidPassword = 'O formato da senha é inválido.' // 'Invalid password format.'
}
