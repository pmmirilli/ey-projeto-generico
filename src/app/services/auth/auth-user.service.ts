import { Injectable } from '@angular/core';

import { User } from 'src/app/models/auth/user/user.model';
import { AuthLogService } from './auth-log.service';

@Injectable({ providedIn: 'root' })
export class AuthUserService {

  private _usersList: Array<User> = [];

  constructor(private _logService: AuthLogService) { }

  public create(userData: User): string {
    // Check if the user already exists.
    if (this.checkExistingUser(userData)) {
      // In case it does:
      // Return an empty string.
      return '';
    }
    // In case it does not:
    // Add the new user to the list.
    this._usersList.push(userData);
    // Create log entry.
    this._logService.create(userData.login);
    // Return success message.
    return UserSuccessMessage.UserCreated;
  }

  public read(login: string): User | null {
    const user = this._usersList.find((user) => { return user.login === login });
    return user ? user : null;
  }

  public update(login: string): void {
    const user = this.read(login);
    if (user) {

      this._logService.update(user.login);
      console.log(UserSuccessMessage.UserCreated);
    }
    console.log(UserErrorMessage.NotFound);
  }

  public delete(login: string): void {
    const userIndex = this._usersList.findIndex((user) => { return user.login === login});
    if (userIndex) {
      this._usersList.splice(userIndex, 1);
      this._logService.update(login);
      console.log(UserSuccessMessage.UserDeleted);
    }
    console.log(UserErrorMessage.NotFound);
  }

  public checkExistingUser(user: User): boolean {
    // Perform several checks to detect duplicate information, in which case it will be considered an existing User.
    if (
      this.checkAvailableLogin(user.login)
      // || other checks.
      // ...
    ) {
      return true;
    }
    // Return 'false' otherwise.
    return false;
  }

  private checkAvailableLogin(login: string): boolean {
    const user: boolean = !!this._usersList.find(
      (user) => { user.login === login }
    );
    if (user) {
      console.log(UserErrorMessage.LoginInUse);
      return true;
    }
    return false;
  }
}

export enum UserErrorMessage {
  LoginInUse = 'Este nome de usuário já está em uso.', // 'This login name is already in use.'
  UserDenied = 'Usuário não criado.', // 'User not created.'
  UserExists = 'Este usuário já existe.', // 'This user already exists.'
  NotFound = 'Usuário não encontrado.', // 'User not found.'
  Default = 'Ocorreu um erro.'// 'There was an error.'
}

export enum UserSuccessMessage {
  UserCreated = 'Usuário criado com sucesso.', // 'User successfully created.'
  UserDeleted = 'Usuário excluído com sucesso.', // 'User successfuly deleted.'
}
