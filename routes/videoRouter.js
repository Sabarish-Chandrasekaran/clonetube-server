const express = require("express");
const {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  like,
  dislike,
} = require("../modules/videoModule");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//create a video
router.post("/", protect, addVideo);

//update a video
router.put("/:id", protect, addVideo);

//delete a video
router.delete("/:id", protect, addVideo);

//find videos of entire channel
router.get("/find/:id", getVideo);

//total views
router.put("/view/:id", addView);

//trending video
router.get("/trend", trend);

//random home page video
router.get("/random", random);

//video frm sub channel
router.get("/sub", protect, sub);

//video by tag
router.get("/tags", getByTag);

//search videos
router.get("/search", search);

//like a video
router.put("/like/:videoId", protect, like);

//dislike a video
router.put("/dislike/:videoId", protect, dislike);

module.exports = router;
