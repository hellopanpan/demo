var express=require("express");
var router=express.Router();
router.get("/user",function(req,res,next){
	res.send("<h3>name--api</h3>")
});
module.exports=router;