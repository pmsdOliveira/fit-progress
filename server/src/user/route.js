const express = require("express");
const router = express.Router();

const userController = require("./controller");
const controller = new userController();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUserById);
router.delete("/:id", controller.deleteUserById);

module.exports = router;
