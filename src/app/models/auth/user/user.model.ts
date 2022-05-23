import { Log } from "../log/log.model";
import { Person } from "../person/person.model";

export class User {

  constructor(
    public login: string,
    public password: string,
    public person: Person,
    public log: Log
  ) { }
}
