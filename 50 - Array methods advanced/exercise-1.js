function adultFilter(persons) {
  let adults = [];
  for (var key in persons) {
    if (persons[key].age >= 18) {
      adults[key] = persons[key];
    }
  }

  // non capisco perchè mi stampa anche gli indici, l'idea era che con reduce mi eliminasse i campi <empty item> che ottenevo con il for
 adults = Object.entries(adults).reduce((temp, [key, value]) => {
    if (value) {
      temp[key] = value;
    }
    return temp;
  }, {});
  return adults;
}
  

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
