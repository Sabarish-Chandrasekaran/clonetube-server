const express = require("express");
const {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} = require("../modules/userModule");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//update user
router.put("/:id", protect, update);

//delete user
router.delete("/:id", protect, deleteUser);

//get a user
router.get("/find/:id", getUser);

//subscribe a user
router.put("/sub/:id", protect, subscribe);

//unsubscribe a user
router.put("/unsub/:id", protect, unsubscribe);



module.exports = router;
