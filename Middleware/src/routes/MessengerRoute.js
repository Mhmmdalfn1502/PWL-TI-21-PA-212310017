const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");

router.get("/", MessageController.index);
router.post("/create", MessageController.createData);
router.get("/fetch-all", MessageController.getAll);
router.get("/:id", MessageController.getByID);
// router.get("/user/:id", MessageController.getByUser)
router.get("/update", MessageController.updatedData);
router.delete("/delete", MessageController.deleteData);
router.post("/selected-chat", MessageController.getSelectedChat);

module.exports = router;
