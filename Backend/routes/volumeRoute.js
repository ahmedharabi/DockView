const express=require("express");
const router=express.Router();
const volumeController=require("../controller/volumeController")
router.get("/",volumeController.getVolumes);

module.exports=router;