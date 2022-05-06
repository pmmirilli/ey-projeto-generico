import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component';
import { CustomCheckboxComponent } from '../assets/styles/custom-checkbox/custom-checkbox.component';
import { EmailPinPromptComponent } from './auth/email-pin-prompt/email-pin-prompt.component';
import { PopupMessageComponent } from './shared/components/popup-message/popup-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    SignUpComponent,
    AuthComponent,
    RecoverPasswordComponent,
    CustomCheckboxComponent,
    EmailPinPromptComponent,
    PopupMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
