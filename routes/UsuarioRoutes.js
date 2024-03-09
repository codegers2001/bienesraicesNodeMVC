import express from "express";

// crear un router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.get("/usuarios", (req, res) => {
  res.send("Hola usuario");
});

export default router;
