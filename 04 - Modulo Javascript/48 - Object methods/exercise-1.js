const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

for(var key in person){
  console.log(key + ": "+person[key]);
}