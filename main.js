var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Baua Baua");
});

app.listen(3000);
