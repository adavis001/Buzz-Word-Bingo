/*jshint esversion:6*/
const express = require('express');
const router = express.Router();


let buzziestWords = [];
let justTheWords = {
  'buzzwords': []
};

router.route('/')
  .get(function(req, res) {
    res.json(justTheWords);
  })
  .post(function(req, res) {
  	//console.log(req.body);
    justTheWords.buzzwords.push(req.body.buzzword);
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