var express = require('express');
var path  = require('path');
var newStaff = require('./scrumgenerator');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/data-request', function(request, response){
    console.log(newStaff);
    response.writeHead(200);
    response.write(newStaff);
});

app.get('/*', function(req, res){
    var file = req.params[0] || "./views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get('port'), function (){
    console.log("Server is up on port: " + app.get('port'));
});
