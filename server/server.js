const express = require("express");
const path = require("path");

const userRoutes = require("./routes/users");
const quoteRoutes = require("./routes/users");
const goalsRoutes = require("./routes/goals");
const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));

// server.use("/api/v1", authRoutes)
server.use("/api/v1/users", userRoutes);
server.use("/api/v1/quotes", quoteRoutes);
server.use("/api/v1/goals", goalsRoutes);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = server;
