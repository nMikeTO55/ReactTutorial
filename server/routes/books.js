const express        = require("express");
const mysql          = require("mysql");
const router         = express.Router();
const connectPool    = require("../database/pool-connects");
const BookRepository = require("../database/book-repository");

let repository = new BookRepository(connectPool);

// Save a book.
router.post('/', function(req, res){
 
  repository.save(req.body, (err, result)=>{
    if(err){
     res.sendStatus(500);
    }
    else {
      res.sendStatus(200); 
    }
  });  
})

// GET all books
router.get("/", function (req, res) {

  repository.getAll((err, result)=>{
    if(err){
     res.status(500).json(result);
    }
    else {
      res.status(200).json(result); 
    }
  });
});

// GET book by id
router.get("/:id", function (req, res) {
  repository.get(req.params.id, (err, result)=>{
    if(err){
     res.status(500).json(result);
    }
    else {
      res.status(200).json(result); 
    }
  });
});

// Update a book
router.put("/:id", function (req, res) {
  console.log('body', req.body);
  repository.update(req.params.id, req.body, (err)=>{
    if(err){
     res.sendStatus(500);
    }
    else {
      res.sendStatus(200); 
    }
  });
  //res.sendStatus(200);

});

// Delete a book
router.delete("/:id", function (req, res) {

  repository.delete(req.params.id, (err, result)=>{
    if(err){
     res.status(500).json(result);
    }
    else {
      res.sendStatus(200); 
    }
  });
});

module.exports = router;