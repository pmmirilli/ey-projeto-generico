import { Injectable } from '@angular/core';

import { Log } from 'src/app/models/auth/log/log.model';

@Injectable({ providedIn: 'root' })
export class AuthLogService {

  private _logHistory: Array<Log> = [];

  public create(lastState: string): void {
    const createdAt = new Date(Date.now());
    const updatedAt = createdAt;
    const newLogEntry = new Log(createdAt, updatedAt, lastState);
    this._logHistory.push(newLogEntry);
  }

  public read(lastState: string): Log | null {
    const entry = this._logHistory.find((entry) => { return entry.lastState === lastState });
    return entry ? entry : null;
  }

  public update(lastState: string): void {
    const entry = this.read(lastState);
    if (entry) {
      entry.updatedAt = new Date(Date.now());
    }
  }
}
