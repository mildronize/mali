const express = require("express");
const router = express.Router();
const users = require("../../config/users");

// @route   GET api/students/
// @desc    get student lists
// @access  Public
router.get("/students", (req, res) => res.json({ students: users.students }));

// @route   GET api/criteria/
// @desc    get criteria
// @access  Public
router.get("/criteria", (req, res) => res.json({ dm1: users.dm1Criteria, dm2: users.dm2Criteria }));

module.exports = router;
