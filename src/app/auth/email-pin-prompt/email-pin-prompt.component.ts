import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthEmailService, PinErrorCode } from 'src/app/services/auth/auth-email.service';

@Component({
  selector: 'app-email-pin-prompt',
  templateUrl: './email-pin-prompt.component.html',
  styleUrls: ['./email-pin-prompt.component.scss']
})
export class EmailPinPromptComponent implements OnInit, OnDestroy {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  public emailSent: boolean = false;
  public authOk: boolean = false;
  public emailFailedMessage: string = '';
  public pinErrorMessage: string = '';

  constructor(private _router: Router, private _authEmailService: AuthEmailService) { }

  ngOnInit(): void {
    this._authEmailService.emailFailedMessage.subscribe( // AGORA, É NECESSÁRIO FAZER DE MODO QUE A CONTAGEM CONTINUE MESMO COM O APLICATIVO RECARREGADO. SERVIÇO DE IP?
      (message) => {
        this.emailFailedMessage = message;
        this.emailSent = !!message;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.authOk) {
      this._authEmailService.emailFailedMessage.unsubscribe();
    }
  }

  onSendEmail(): void {
    this.emailSent = true;
    this._authEmailService.emailTimeout(60);
  }

  pinAuth(): boolean {
    // Conferir a validez do PIN fornecido.
    return true;
  }

  onNextPin(event: any) { // Qual é o tipo correto aqui? ////////////////////////
    let element: HTMLElement;
    if (event.key !== 'Backspace') {
      element = event.target?.nextElementSibling;
      if (!/[0-9]/.test(event.key)) {
        this.pinErrorMessage = this._authEmailService.pinErrorMessage(PinErrorCode.NumbersOnly);
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

  onOk(): void {
    if (this.pinAuth()) {
      this.authOk = true;
      this._router.navigate(['auth/recover-password']);
    } else {
      this.pinErrorMessage = this._authEmailService.pinErrorMessage(PinErrorCode.InvalidPin);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
