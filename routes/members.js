var express = require('express');
var router = express.Router();
var member = require("../controllers/MemberController.js");

// Get all employees
router.get('/', function (req, res) {
  member.list(req, res);
});

// Get single employee by id
router.get('/show/:id', function (req, res) {
  member.show(req, res);
});

// Create employee
router.get('/create', function (req, res) {
  console.log(req.body);
  member.create(req, res);
});

// Save employee
router.post('/save', function (req, res) {
  member.save(req, res);
});

// Edit employee
router.get('/edit/:id', function (req, res) {
  member.edit(req, res);
});

// Edit update
router.post('/update/:id', function (req, res) {
  member.update(req, res);
});

// Edit update
router.post('/delete/:id', function (req, res, next) {
  member.delete(req, res);
});

module.exports = router;
