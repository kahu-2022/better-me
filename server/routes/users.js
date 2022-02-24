const express = require("express");

const db = require("../db/users");
const snakeCase = require("snakecase-keys");
const router = express.Router();

//localhost:3000/api/v1/users
router.post("/", (req, res) => {
  console.log("res.body", req.body);
  db.getUserIfExists(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
