// HTTP requests
// We make http requests to get data from another server.
// We make these requests to API endpoints
// API endpoint is URL (some part of api is exposed to us)

// JSONPlaceholder - Free Fake REST API https://jsonplaceholder.typicode.com
// Use the above website to play around api

const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  console.log("after creating", request.readyState);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else {
      callback("Could not fetch data", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

const request = new XMLHttpRequest();
console.log("after creating", request.readyState);
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else {
    console.log("Could not fetch the data");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();

console.log(1);
console.log(2);
getTodos((err, data) => {
  console.log("callback fired");
  console.log(5);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
