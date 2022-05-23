import { Injectable } from '@angular/core';

import { Person } from 'src/app/models/auth/person/person.model';
import { AuthLogService } from './auth-log.service';

@Injectable({ providedIn: 'root' })
export class AuthPersonService {

  public email: string ='';

  private _personsList: Array<Person> = [];

  constructor(private _logService: AuthLogService) { }

  /// CHECK IF PERSON ALREADY EXISTS /// read -> Person ? exists! : create new.
  create(personData: Person): void {
    // Add the new person data to the list.
    this._personsList.push(personData);
    // Create log entry.
    this._logService.create(personData.email);
    // Pass along the email to the SignUpComponent.
    this.email = personData.email;
  }

  public read(email: string): Person | null {
    const person = this._personsList.find((person) => { return person.email === email });
    return person ? person : null;
  }
}
