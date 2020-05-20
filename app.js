var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World this is test");
});

app.listen(4000);
