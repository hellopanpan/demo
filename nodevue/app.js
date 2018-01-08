var express=require("express");
//var swing=require("swing");
var app=express();

app.listen(8081);
//app.engine("html",swing.renderFile);
//app.set("views",'./views');
//app.set("view engine",'html');
app.get('/',function(req,res,next){
	res.send(`<html>
		<head>
			<title>hellonaver</title>
			<link style="text/css" rel="stylesheet" href="./public/main.css" />
		</head>
		<body>
			<h1>hello naver</h1>
		</body>
	</html>`);
	next();
},function(){
	console.log("hllow");


});
app.use("/public",express.static(__dirname+'/public')); 
app.use("/admin",require('./routers/admin'));
/*app.use("/admin/:id",function(req,res,next){
	console.log('Request URL:', req.params.id);
  next();
},function(req,res,next){
	res.send("nihaoma");
});*/
app.use("/api",require("./routers/api"));
app.use("/",require("./routers/main"));
