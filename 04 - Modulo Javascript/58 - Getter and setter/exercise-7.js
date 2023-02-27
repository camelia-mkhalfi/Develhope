class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(firstName){
    this._firstName = firstName;
  }

  set lastName(lastName){
    this._lastName = lastName;
  }

  set age(age){
    this._age = age;
  }

  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._firstName;
  }

  get age(){
    return this._age;
  }

  get fullName() {
    return this.firstName+ " " + this.lastName + " " + this.age;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);