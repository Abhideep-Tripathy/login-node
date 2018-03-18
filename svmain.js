var express= require('express');
var app=express();

app.set('view engine','jade');
app.get( '/' || '/home' , function(req,res){
res.render('welcome');
console.log(req.url);
});
app.get('/login', function (req,res){
res.render('login');
})
console.log("server successfully created");
app.listen(3000);
