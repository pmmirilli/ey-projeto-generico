import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthPasswordService {

  comparePasswords(password1: string, password2: string): boolean {
    if(password1 === password2) {
      console.log('The provided passwords match.'); /////////////////
      return true;
    } else {
      console.log('The provided passwords DO NOT match.'); /////////////////
      return false;
    }
  }

  checkPasswordValidity(): boolean {
    return true;
  }

  errorMessage(errorCode: ErrorCode): string {
    let text: string = '';
    switch (errorCode) {
      case 'not-a-match':
        text = 'As senhas fornecidas nos dois campos devem ser idênticas.';
        break;
      case 'invalid-password':
        text = 'A senha deve conter ...';
        break;
      default:
        text = 'Senha: erro desconhecido.';
    }
    return text;
  }
}

export enum ErrorCode {
  NotAMatch = 'not-a-match',
  InvalidPassword = 'invalid-password'
}
