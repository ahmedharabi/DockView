const express=require("express");
const router=express.Router();
const networkController=require("../controller/networkController")
router.get("/",networkController.getNetworks);

module.exports=router;