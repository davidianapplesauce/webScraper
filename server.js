var express = require("express");
var mongojs = require("mongojs");

var cheerio = require("cheerio");
var axios = require("axios");

//Initialize Express
var app = express();

//Database config 
var databaseUrl = "newsScraper"
var collections = ["spaceNews"]

//request via axios for spacenews.com
axios.get("https://spacenews.com/segment/news/").then(function(response) {

//loads response into cheerio as a variable
    var $ = cheerio.load(response.data);

    var results = [];

    $("h2.launch-title").each(function(i, element) {

        //saves text in a 'title' variable
        var title = $(element).text();

        //child elements
        var link = $(element).children().attr("href");
        

        results.push({
            title: title,
            link: link,
        });
    });

    console.log(results);
});