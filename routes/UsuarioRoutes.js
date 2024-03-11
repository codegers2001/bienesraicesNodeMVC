import express from "express";
import { formularioLogin, formularioRegistro, formularioOlvidePassword } from "../controllers/UsuarioController.js";

// crear un router
const router = express.Router();

router.get("/login", formularioLogin );

router.get("/crear-cuenta", formularioRegistro );
router.post("/crear-cuenta", registrarUsuario );

router.get("/olvide-password", formularioOlvidePassword);


export default router;
