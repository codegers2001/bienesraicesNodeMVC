import express from "express";
import { formularioLogin, formularioRegistro } from "../controllers/UsuarioController.js";

// crear un router
const router = express.Router();

router.get("/login", formularioLogin );
router.get("/registro", formularioRegistro );


export default router;
