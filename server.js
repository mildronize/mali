const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Config Mongoose => https://mongoosejs.com/docs/deprecations.html
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

const users = require("./routes/api/users");
const data = require("./routes/api/data");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport Config
require("./config/passport")(passport);

// DB Config
const db = require("./config/key").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/users", users);
app.use("/api/data", data);

const port = process.env.PORT || 3001;
app.listen(port, () => console.group(`Server runnning on port ${port}`));
