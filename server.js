/*jshint esversion:6*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buzzwordsRoutes = require('./routes/buzzwords');
const PORT = 3000;

let buzziestWords = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/buzzwords', buzzwordsRoutes);


app.get('/', function(req,res) {
	res.send('Hello World!');
});

const server = app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});  