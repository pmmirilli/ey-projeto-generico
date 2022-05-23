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

  @Input() yesButtonText: string = '';
  @Input() yesPath: string = this.path;

  @Input() noButtonText: string = '';
  @Input() noPath: string = this.path;

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate([this.path]);
  }

  onYesClick(): void {
    this.router.navigate([this.yesPath]);
  }

  onNoClick(): void {
    this.router.navigate([this.noPath]);
  }
}
