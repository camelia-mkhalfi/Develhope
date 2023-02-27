function sum(somma,...argomenti) {
  argomenti.forEach(elem => { somma +=elem;});
  return somma;
}

//const numbers = [1, 2, 3];
console.log(sum(0,1,2,3));