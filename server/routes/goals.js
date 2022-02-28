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


router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  // console.log(req.params.id)

  db.deleteGoals(id)
  .then(numberUpdated => {
    if (numberUpdated !== 1) throw Error('Id has been deleted')
    res.sendStatus(200)
  })
.catch(err => {
    res.status(500).json({ error: err.message })
  })
})


router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  // const newStatus = req.body.completed
    db.updateGoals(id)
      .then((id) => {
        res.status(201).send('goal has been completed')
        return id
  })
      .catch((err) => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})



module.exports = router;
