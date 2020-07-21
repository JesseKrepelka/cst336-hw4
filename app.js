const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

const faker = require('faker');
//var active; I know that i can set this each time i navigate to a page to use it for active links but cant figure out
//how to do if statements in my nav bar.

//routes
app.get("/", function(req, res){
    res.render("index.ejs", {
        cat: faker.image.cats(),
        verb: faker.hacker.verb(),
        adjective: faker.hacker.adjective(),
        noun: faker.hacker.noun(),
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        companyName: faker.company.companyName()
        //active="index"
    });
});

app.get("/py", function(req, res){
    res.render("py.ejs");
});
app.get("/kot", function(req, res){
    res.render("kot.ejs");
});
app.get("/go", function(req, res){
    res.render("go.ejs");
});
app.get("/sw", function(req, res){
    res.render("sw.ejs");
});

//Starting server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Express server is running..."); 
});