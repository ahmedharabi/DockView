const express=require("express");
const containerController=require("../controller/container");

const router=express.Router();


router.get("/containers",containerController.getContainers)
router.get("/containers/:id",containerController.getContainerById)
router.post("/containers/:id/start",containerController.startContainer);
router.post("/containers/:id/stop",containerController.stopContainer);
router.post("/containers/:id/restart",containerController.restartContainer);
router.delete("/containers/:id",containerController.deleteContainer);

router.get("/images",containerController.getImages);

module.exports=router;
