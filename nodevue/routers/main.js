var express=require("express");
var router=express.Router();
router.get("/user",function(req,res,next){
	res.send("<h3>nameapi--main</h3>")
});
module.exports=router;