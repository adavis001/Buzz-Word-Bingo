/*jshint esversion:6*/
const express = require('express');

const router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.send(`Got Buzzword by id ${req.params.id}`);
  })
  .post(function(req, res) {
  	//console.log(req.body);
    res.send(`Buzzword added: ${req.params.id}`);
  })
  .put(function(req, res) {
    res.send('Update the movie');
  })
  .delete((req,res) =>{
  	res.json({success: true});
  });

module.exports = router;