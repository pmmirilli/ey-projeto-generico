import { Log } from "../log/log.model";

export class Person {

  constructor(
    public name: string,
    public birthDate: Date,
    public email: string,
    public phone: string,
    public photo: string,
    public document: string
  ) { }
}
