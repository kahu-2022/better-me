const express = require("express");

const db = require("../db/goals");

const router = express.Router();

//localhost:3000/api/v1/goals
router.post("/", (req, res) => {
  db.addGoals(req.body)
    .then((goalsId) => {
      return res.json(goalsId);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  db.getGoals(res.body)
    .then((goals) => {
      return res.json(goals);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
