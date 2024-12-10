const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(3000, function(){
    console.log("Server running on port http://127.0.0.1:3000/");
});