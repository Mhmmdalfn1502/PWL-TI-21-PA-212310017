const express = require("express");
const router = express.Router();
const userController = require("../controllers/UsersController");

router.get("/", userController.index);
router.post("/create", userController.createData);
router.get("/fetch-all", userController.getAll);

module.exports = router;