const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const passport = require("passport");
const users = require("../../config/users");

const nodemailer = require("nodemailer");

// Load user models
const User = require("../../models/Users");

const requireJWTAuth = passport.authenticate("jwt", { session: false });

// @route   GET api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "User works!" }));

// @route   POST api/users/register
// @desc    Register User
// @access  Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    login user / Return JWT token
// @access  Public

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }
    // Check for password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Match
        const payload = { id: user.id, name: user.name };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

// @route   POST api/users/generateCredential
// @desc    Login in and Return JWT token to the email
// @access  Public

router.post("/generateCredential", (req, res) => {
  const email = req.body.email;
  const origin = "http://localhost:3000";

  // Find user by email
  const user = users.authorizedUsers.find(user => user.email == email);

  // Check for user
  if (!user) {
    return res.status(404).json({ email: "User not found" });
  }

  // User Match
  const payload = { id: user.id, name: user.name };

  // setup mail transporter service
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: "thada.w@psu.ac.th",
      pass: "gyalqdtdbliywfxq"
    }
  });

  // Sign Token
  jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
    const linkToLogin = encodeURI(`${origin}/login?t=Bearer ${token}`);

    // setup email data with unicode symbols
    const mailOptions = {
      from: "thada.w@psu.ac.th", // sender
      to: email, // list of receivers
      subject: "Direct link to DM Project system", // Mail subject
      html: `
         <b>The link to access this site</b><p>
          <a  href="${linkToLogin}">Click to Login</a>
          </p>`
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) throw err;
      console.log(info);
      res.json({
        success: true
      });
    });
  });
  
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get("/current", requireJWTAuth, (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;
