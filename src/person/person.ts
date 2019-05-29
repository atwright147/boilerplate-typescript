export class Person {
  private myFirstName = '';
  private myLastName = '';
  private myHeight: number;
  private myArms: number;
  private myLegs: number;

  constructor(
    firstName: string,
    lastName: string,
    height: number,
    arms: number,
    legs: number,
  ) {
    this.myFirstName = firstName;
    this.myLastName = lastName;
    this.myHeight = height;
    this.myArms = arms;
    this.myLegs = legs;
  }

  get name(): string {
    return `${this.myFirstName} ${this.myLastName}`;
  }

  get height(): number {
    return this.myHeight;
  }

  get arms(): number {
    return this.myArms;
  }

  get legs(): number {
    return this.myLegs;
  }
}
