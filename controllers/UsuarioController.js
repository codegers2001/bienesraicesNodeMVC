import { check, validationResult } from "express-validator";
import { Usuario } from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", { pagina: "Iniciar sesión" });
};

const formularioRegistro = (req, res) => {
  res.render("auth/crear-cuenta", { pagina: "Crear Cuenta" });
};

const registrarUsuario = async (req, res) => {
  // validar los datos
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .run(req);
  await check("email")
    .isEmail()
    .withMessage("El email es obligatorio")
    .run(req);
  await check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .run(req);
  await check("confirmPassword")
    .equals("password")
    .withMessage("Las contraseñas no coinciden")
    .run(req);

  const resultado = validationResult(req);

  if (!resultado.isEmpty()) {
    return res.render("auth/crear-cuenta", {
      pagina: "Crear Cuenta",
      errores: resultado.array(),
    });
  }

  const usuario = await Usuario.create(req.body);
  res.json(usuario);
};

const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", { pagina: "Recuperar Contraseña" });
};

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registrarUsuario,
};
