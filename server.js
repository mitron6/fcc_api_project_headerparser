var express = require('express');
var app = express();

app.get('/api/whoami', function(req, res) {
    
    // Google "node request ip" to see cases where the below might not work
    var ip = req.headers['x-forwarded-for'].split(",")[0];
    
    // Languages are listed in preferred order, separated by ","
    var language = req.headers['accept-language'].split(",")[0];
    
    // Regular express gets the first value in parenthesis
    var software = req.headers['user-agent'].match(/\(.*?\)/)[0];
    
    res.send({ipaddress: ip, language: language, software: software});
});

app.listen(process.env.PORT);
