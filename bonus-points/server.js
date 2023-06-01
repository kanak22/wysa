const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/User");
const articleRoute = require("./routes/Article");
const {authenticateJWT} = require("./middleware/auth");

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use("/", userRoute);
app.use("/articles", articleRoute);
mongoose.set("strictQuery", false);
const url = process.env.MONGO_URL;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend server is up at ${port} `);
});