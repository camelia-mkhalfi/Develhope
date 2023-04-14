const select = document.getElementById("select");
const toDo = document.getElementById("textArea");
const loading = document.getElementById("loading");

const getTodos = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/?userId=${id}`
  );
  const response = await result.json();
  return response;
};

const getUsers = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const response = await result.json();
  return response;
};

getUsers()
  .then((data) => {
    data.forEach((user) => {
      const option = document.createElement("option");
      option.text = user.name;
      option.value = user.id;
      select.appendChild(option);
      /*const todos = getUsers(user.id).then(data =>{
      toDo.innerHTML(data);
    });*/
    });

    select.addEventListener("change", async (event) => {
      const userId = event.target.value;
      const todos = await getTodos(userId);
      let clear = "";
      for (const todo of todos) {
        clear += "<li>" + todo.title + "</li>";
      }
      toDo.innerHTML = clear;
      loading.style.display = "none"; 
    });
  })
  .catch((error) => {
    console.log(error);
  });
