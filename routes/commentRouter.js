const express = require("express");
const {
  addComment,
  deleteComment,
  getComments,
} = require("../modules/commentModule");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addComment);
router.delete("/:id", protect, deleteComment);
router.get("/:videoId", getComments);

module.exports = router;
