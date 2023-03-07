"use-strict";

const axios = require("axios");

const book = {
  'author':'Robert Goyeche',
    'title':'Design Basics',
    'published':'1989-09-21'
};
/*
axios.post('http://localhost:3000/books', book)
.then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);  
});


axios.put("http://localhost:3000/books/4", book)
  .then((response) => {
    console.log("Response is: ", response);
  })
  .catch((error) => {
    console.log("Error is: ", error);
  });
*/
 
axios.delete('http://localhost:3000/books/5')
  .then((response) => {
    console.log("Response is: ", response);
  })
  .catch((error) => {
    console.log("Error is: ", error);
  });
   