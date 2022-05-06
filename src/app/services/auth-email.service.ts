import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEmailService {
  public emailFailedMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  sendPinEmail() {
    // Send email with a validation 4-digit PIN code.
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
}
