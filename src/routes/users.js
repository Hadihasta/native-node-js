const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/", UserController.getAll);
router.post("/", UserController.createUser);

module.exports = router;