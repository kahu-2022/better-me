const express = require("express");

const db = require("../db/goals");

const router = express.Router();

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

router.delete("/:id", (req, res) => {
  console.log("res.param", req.params.id);
  const id = Number(req.params.id);
  console.log("id", id);

  db.deleteGoals(id)
    .then((numberUpdated) => {
      if (numberUpdated !== 1) throw Error("Id has been deleted");
      res.sendStatus(200);
      return null;
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const newStatus = req.body.completed;
  db.updateGoals(id, newStatus)
    .then(() => {
      res.status(201).send("goal has been completed");
      return null;
    })
    .catch((err) => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

module.exports = router;
