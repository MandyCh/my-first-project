var express = require('express');
var app = express();
app.use(express.static('public'));
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'python'
// })

// connection.connect();
// connection.query('select * from ajax', function(error, results, fields) {
//     if (error) throw error;
//     var temp = JSON.stringify(results);
//     var arr = JSON.parse(temp)

//     app.get('/', function(req, res) {
//         res.send(arr)
//     })
// })

// connection.end()

app.get('/', function (req, res) {
    res.send("hello")
})

var server = app.listen(3005, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("http://%s:%s", host, port);
})