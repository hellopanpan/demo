 var express=require("express");
var router=express.Router();
router.get("/",function(req,res,next){
	res.send("<h3>admin 根目录</h3>")
});
router.get("/:user",function(req,res,next){
	if(req.params.user=="0"){
		res.send("<h3>name--admin</h3>"+req.params.user);
	}else{
		next('route');
	}
});
router.get("/:user",function(req,res,next){
	res.send("nihaoashdaha")
});
module.exports=router;