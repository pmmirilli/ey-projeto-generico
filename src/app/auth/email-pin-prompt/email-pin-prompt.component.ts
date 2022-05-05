import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthEmailService } from 'src/app/services/auth.email.service';

@Component({
  selector: 'app-email-pin-prompt',
  templateUrl: './email-pin-prompt.component.html',
  styleUrls: ['./email-pin-prompt.component.scss']
})
export class EmailPinPromptComponent implements OnInit, OnDestroy {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  emailSent: boolean = false;
  authOk: boolean = false;
  emailFailedMessage: string = '';
  pinErrorMessage: string = '';

  constructor(private router: Router, private authEmailService: AuthEmailService) { }

  ngOnInit(): void {
    this.authEmailService.emailFailedMessage.subscribe(
      (message) => {
        this.emailFailedMessage = message;
        this.emailSent = !!message;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.authOk) {
      this.authEmailService.emailFailedMessage.unsubscribe();
    }
  }

  onSendEmail() {
    this.emailSent = true;
    this.authEmailService.emailTimeout(60);
  }

  pinAuth(): boolean {
    return true;
  }

  onNextPin(event: any) { // Qual é o tipo correto aqui?
    let element: HTMLElement;
    if (event.key !== 'Backspace') {
      element = event.target?.nextElementSibling;
      if (!/[0-9]/.test(event.key)) {
        this.pinErrorText('numbers-only');
      }
    }
    if (event.key === 'Backspace') {
      element = event.target?.previousElementSibling;
    }

    if (element! == null) {
      return;
    } else {
      element.focus();
    }
  }

  pinErrorText(errorCode: string) {
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
    this.pinErrorMessage = text;
  }

  onOk() {
    if (this.pinAuth()) {
      this.authOk = true;
      this.router.navigate(['auth/recover-password']);
    } else {
      this.pinErrorText('invalid-pin');
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
