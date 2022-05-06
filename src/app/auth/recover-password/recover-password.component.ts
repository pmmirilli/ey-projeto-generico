import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthPasswordService, ErrorCode } from 'src/app/services/auth-password.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit, OnDestroy {
  @ViewChild('authForm') authForm!: NgForm;

  passwordsMatch: Subject<boolean> = new Subject<boolean>();
  errorMessage: string = '';
  okToProceed: boolean = true;
  displaySuccessPrompt: boolean = false;

  constructor(private router: Router, private authPasswordService: AuthPasswordService) {}

  ngOnInit(): void {
    this.passwordsMatch.subscribe(
      (value) => {
        this.okToProceed = value;
        if (!this.okToProceed) {
          this.errorMessage = this.authPasswordService.errorMessage(ErrorCode.NotAMatch);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.passwordsMatch.unsubscribe();
  }

  onSubmit(): void {
    this.onCheckPasswords();

    if (this.okToProceed) {
      this.displaySuccessPrompt = true;
      // Write new password to user data.
      // Go to login page after confirm prompt.
      // this.router.navigate(['auth/login']);
    }
  }

  onCheckPasswords() {
    this.passwordsMatch.next(
      this.authPasswordService.comparePasswords(
        this.authForm.value['new-password'],
        this.authForm.value['confirm-password']
      )
    );
  }
}
