// const express = require("express");
// const path = require("path");
// const authRoutes = require("./routes/auth.routes.js");
// const userRoutes = require("./routes/user.routes.js");
// const postRoutes = require("./routes/post.routes.js");
// const notificationsRoutes = require("./routes/notifications.routes.js");

// const connectMongoDB = require("./db/connectMongoDB");
// var cookieParser = require("cookie-parser");
// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();

// const port = process.env.PORT || 8000;

// const app = express();
// app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_API_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const __dirname = path.resolve();

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/notifications", notificationsRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }

// app.listen(port, () => {
//   console.log(`server is running at ${port}`);
//   connectMongoDB();
// });

/************************************************************************************************/

const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
const postRoutes = require("./routes/post.routes.js");
const notificationsRoutes = require("./routes/notifications.routes.js");

const connectMongoDB = require("./db/connectMongoDB");
var cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Adjusted path

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html")); // Adjusted path
  });
}

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
  connectMongoDB();
});
