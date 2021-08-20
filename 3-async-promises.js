// promise
// const promise = new Promise((resolve, reject)=>{}) ->resolve, reject are
//  resolve and reject are callback functions

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else {
        reject("promise is rejected");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("./todos.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
