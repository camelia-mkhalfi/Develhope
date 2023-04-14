const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// Non posso modificare direttamente person2 perchè che qualsiasi valore memorizzato in esso e da person1 punta allo stesso oggetto

const temp = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const persona2 = temp;
persona2.firstName="Simon";

console.log(person1);
console.log(persona2);

