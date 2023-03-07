const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem('user', JSON.stringify(user));

const response = localStorage.getItem('user');
const jsonRes = JSON.parse(response);
console.log(jsonRes);