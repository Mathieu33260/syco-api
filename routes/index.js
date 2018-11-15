var express = require('express');
var router = express.Router();
var request = require("request");
var mysql = require('mysql');

router.get('/', function(req, res, next) {

    //todo set authorization headers (api key)

    var con = mysql.createConnection({
        host: "hebfree.org",
        user: "siteppp",
        password: "iutaudessus33",
        database: "siteppp0"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        sql =
            "SELECT * " +
            "FROM syco";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
        });
    });
});

module.exports = router;