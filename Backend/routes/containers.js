const express=require("express");
const containerController=require("../controller/container");

const router=express.Router();


router.get("/",containerController.getContainers)
router.get("/:id",containerController.getContainerById)
router.post("/:id/start",containerController.startContainer);
router.post("/:id/stop",containerController.stopContainer);
router.post("/:id/restart",containerController.restartContainer);
router.delete("/:id",containerController.deleteContainer);

module.exports=router;
