const express = require("express");
const request = require("superagent");

const router = express.Router();

// Api Route

router.get("/", (req, res) => {
  return req
    .get("https://type.fit/api/quotes")
    .then((response) => {
      res.json(response.body);
      return null;
    })
    .catch((err) => {
      console.log("error", err.message);
    });
});

module.exports = router;
