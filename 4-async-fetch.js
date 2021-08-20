// fetch asynchronous function - api

fetch("./todos.json")
  .then((response) => {
    //const data = response.json(); // it returns a promise not data
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
