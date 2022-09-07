const express = require('express');
const app = express ();

app.get('/', function (request, response){
response.sendFile(__dirname + '/views/index.html');
})

app.get('/about', function (request, response) {
response.sendFile(__dirname + '/views/about.html');
})

app.get('/work', function (request, response) {
    response.sendFile(__dirname + '/views/work.html');
    })

    app.listen(3000);