const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const connectPool = require("../database/pool-connects");
const BookRepository = require("../database/book-repository");

let repository = new BookRepository(connectPool);

router.post('/', function(req, res){
  console.log('post body', req.body);
 
  connectPool.getPool().query('insert into books set ?', req.body, (err, result) =>{
    if(err) throw err;
    console.log(result);
  });
})

/* GET users listing. */
router.get("/", function (req, res) {
  res.send('Getting a book from routes/book.js');
});

// GET user id
router.get("/:id", function (req, res) {
  console.log("ID", req.params.id);
  res.sendStatus(200);
});

// Update a book
router.put("/:id", function (req, res) {
  console.log('body', req.body);
  res.sendStatus(200);

});

/*Delete command*/
router.delete("/:id", function (req, res) {
  console.log("ID", req.params.id);
  res.sendStatus(200);
});

module.exports = router;