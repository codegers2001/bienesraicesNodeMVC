const formularioLogin = (req, res) => {
  res.render("auth/login", { pagina: "Iniciar sesión" });
};

const formularioRegistro = (req, res) => {
  res.render("auth/crear-cuenta", { pagina: "Crear Cuenta" });
};

const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", { pagina: "Recuperar Contraseña" });
}

export { formularioLogin, formularioRegistro, formularioOlvidePassword };
