import express from "express";
import mongoose from "mongoose";
import ejsMate from "ejs-mate";
import path from "path";
const app = express();
const __dirname = path.resolve();

app.engine("ejs", ejsMate);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "Hello listening here shetta" });
});

app.get("/userlogin", (req, res) => {
  res.render("users/userLogin");
});

app.post("/userlogin", (req, res) => {
  console.log(req.body.user);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
