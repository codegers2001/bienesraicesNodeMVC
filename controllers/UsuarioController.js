import { Usuario } from "../models/Usuario.js";

const formularioLogin = (req, res) => {
  res.render("auth/login", { pagina: "Iniciar sesión" });
};

const formularioRegistro = (req, res) => {
  res.render("auth/crear-cuenta", { pagina: "Crear Cuenta" });
};

const registrarUsuario = async(req, res) => {
  // leer los datos
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
}

const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", { pagina: "Recuperar Contraseña" });
}

export { formularioLogin, formularioRegistro, formularioOlvidePassword, registrarUsuario };
