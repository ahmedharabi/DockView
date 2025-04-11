const express=require("express");
const router=express.Router();
const monitorController=require("../controller/monitor");

router.get("/:id/stats",monitorController.getContainerStats);

module.exports=router;