function printName() {
  let helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}

setTimeout(function () { 
  console.log(printName()());
}, 1);
