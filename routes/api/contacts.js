const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "test" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "test" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "test" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "test" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "test" });
});

module.exports = router;
