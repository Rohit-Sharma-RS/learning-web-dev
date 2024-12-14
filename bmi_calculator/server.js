const express = require('express');
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded)

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.get("/", function(req, res){
    res.send("Thanks for posting")
})

app.listen(3000, function(){
    console.log("Server runnin on http://127.0.0.1:3000/")
})