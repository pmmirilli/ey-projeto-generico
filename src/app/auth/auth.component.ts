import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  projectName: string = 'Rounded Square';
  logoPath: string = '/assets/images/Square-Logo-650x366.png';
  // logoPath: string = 'https://logosmarcas.net/wp-content/uploads/2020/12/Square-Logo-650x366.png';
}
