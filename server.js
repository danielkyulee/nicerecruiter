const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname + '/build')));

app.post('/signup', (req, res) => {
    console.log('submitted params: ', req.body);
    
});

app.listen(3000, (req, res) => console.log('app started on 3000'));