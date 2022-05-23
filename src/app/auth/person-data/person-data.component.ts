import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Person } from 'src/app/models/auth/person/person.model';
import { AuthPersonService } from 'src/app/services/auth/auth-person.service';

@Component({
  selector: 'app-person-data',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.scss']
})
export class PersonDataComponent {
  @ViewChild('authForm') authForm!: NgForm;

  constructor(private _location: Location, private _router: Router, private _personService: AuthPersonService) { }

  onReturn(): void {
    this._location.back();
  }

  onSubmit(): void {
    let person: Person = this.authForm.value;
    this._personService.create(person);
    this._router.navigate(['auth/sign-up']);
  }


  /////////////////////////////////// remove this after Angular Material
  cropFileName(path: string): string {
    let fileName: string | undefined = path ? path.split('\\').pop() : undefined;
    if (fileName) {
      fileName = fileName.replace(/\..+$/, '');
      return fileName;
    }
    return 'Upload your file.';
  }
}
