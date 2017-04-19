/*jshint esversion:6*/
const express = require('express');
const router = express.Router();


let buzziestWords = [];

router.route('/')
  .get(function(req, res) {
    res.send(`Got Buzzword `);
  })
  .post(function(req, res) {
  	//console.log(req.body);
    buzziestWords.push(req.body);
    console.log(buzziestWords);
    res.send(`Buzzword added`);
  })
  .put(function(req, res) {
    res.send('Update the movie');
  })
  .delete((req,res) =>{
  	res.json({success: true});
  });

module.exports = router;