class Person {


  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(temp = " "){
    const newPerson = new Person(temp.firstName, temp.lastName);
    return newPerson;
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};


const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
