// async await

const getData = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const test = getData("./todos.json"); // it returns a promise as getData is an async function
//console.log(test); // It returns a promise

getData("./todos.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
