const express = require('express');
const app = express();

const bodyParser = require("body-parser");
    
app.use(bodyParser.urlencoded)

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2); 
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
})

app.listen(3000, function(){
    console.log("Server running on port http://127.0.0.1:3000/");
});