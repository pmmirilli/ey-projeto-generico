import { User } from "../user/user.model";
import { Person } from "../person/person.model";

export class Log {

  constructor(
    public createdAt: Date,
    public updatedAt: Date,
    public lastState: string // previously User | Person | undefined
  ) { }
}
