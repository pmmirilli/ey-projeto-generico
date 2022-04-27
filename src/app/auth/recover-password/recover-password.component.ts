import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  @Output() ok = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private router: Router) { }

  onOk() {
    this.ok.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  onSendEmail() {
    // Send email with a validation 4-digit PIN code.
  }

  onNextPin(pinId: number) {
    // Set focus to PIN digit input specified by pinId.
  }
}
