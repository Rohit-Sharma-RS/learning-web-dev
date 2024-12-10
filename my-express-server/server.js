const express = require('express');
const app = express();

app.get('/', function(req, res){
    console.log(req)
    res.send("<h1>Hi there</h1>")
})

app.listen(3000, function(res, req){
    console.log("Server running on port 3000");
})