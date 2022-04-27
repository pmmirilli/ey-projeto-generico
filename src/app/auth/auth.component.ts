import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  projectName: string = 'Rounded Square';
  logoLink: string = 'https://logosmarcas.net/wp-content/uploads/2020/12/Square-Logo-650x366.png';
}
