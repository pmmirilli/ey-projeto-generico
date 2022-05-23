import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthEmailService {
  public emailFailedMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  sendPinEmail() {
    // Send email with a validation 4-digit PIN code. Como gerar isso?
  }

  emailTimeout(seconds: number) {
    let counter = seconds;
    this.emailFailedMessage.next(' daqui a ' + counter + 's');
    let interval = setInterval(
      () => {
        counter--;
        this.emailFailedMessage.next(' daqui a ' + counter + 's');
      },
      (1000)
    );
    setTimeout(
      () => {
        clearInterval(interval);
        this.emailFailedMessage.next('');
      },
      (seconds * 1000)
    );
  }

  pinErrorMessage(errorCode: PinErrorCode): string {
    let text = '';
    switch (errorCode) {
      case 'numbers-only':
        text = 'O PIN aceita apenas números.'; // 'The PIN takes only numbers.';
        break;
      case 'invalid-pin':
        text = 'O PIN fornecido é inválido.'; // 'The provided PIN is invalid.';
        break;
      default:
        text = 'PIN: erro desconhecido.'; // 'Unknown PIN error.';
    }
    return text;
  }
}

export enum PinErrorCode {
  NumbersOnly = 'numbers-only',
  InvalidPin = 'invalid-pin'
}
