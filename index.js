const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connect");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const videoRouter = require("./routes/videoRouter");
const commentRouter = require("./routes/commentRouter");

const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);
app.use("/api/comments", commentRouter);

app.use(errorHandler);
app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
