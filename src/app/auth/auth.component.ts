import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  projectName: string = 'Projeto Genérico';
  logoLink: string = 'https://st3.depositphotos.com/1216158/12689/v/600/depositphotos_126898238-stock-illustration-spiral-circles-logo.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
