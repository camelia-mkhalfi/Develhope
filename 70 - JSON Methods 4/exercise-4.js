const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

function filter(person) {
  const temp = {};
  for (const key in person) {
    if (Number.isInteger(person[key])) temp[key] = person[key];
  }
  return temp;
}

const json = JSON.stringify(filter(person));
console.log(json); // Should return: { id: 1, age: 25 }
