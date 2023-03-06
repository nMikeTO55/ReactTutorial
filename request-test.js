"use-strict";

const axios = require("axios");

const book = {
  'author':'Tracey Parish',
    'title':'Good Stuff part 2',
    'published':'1952-01-01'
};
/*
axios.post('http://localhost:3000/books', book)
.then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);  
});

axios.put("http://localhost:3000/books/3859", book)
  .then((response) => {
    console.log("Response is: ", response);
  })
  .catch((error) => {
    console.log("Error is: ", error);
  });
*/
axios.delete("http://localhost:3000/books/3859")
  .then((response) => {
    console.log("Response is: ", response);
  })
  .catch((error) => {
    console.log("Error is: ", error);
  });  