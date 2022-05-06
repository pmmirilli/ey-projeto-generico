import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent {
  @Input() message: string = 'Default message';
  @Input() buttonText: string = 'Default';
  @Input() path: string = '';

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate([this.path]);
  }
}
