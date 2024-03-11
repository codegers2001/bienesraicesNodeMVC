const formularioLogin = (req, res) => {
  res.render("auth/login", { pagina: "Iniciar sesión" });
};

const formularioRegistro = (req, res) => {
  res.render("auth/crear-cuenta", { pagina: "Crear Cuenta" });
};

const registrarUsuario = (req, res) => {
  // leer los datos
  const { nombre, email, password } = req.body;
  console.log(nombre + " " + email + " " + password);
  res.send("enviado");
}

const formularioOlvidePassword = (req, res) => {
  res.render("auth/olvide-password", { pagina: "Recuperar Contraseña" });
}

export { formularioLogin, formularioRegistro, formularioOlvidePassword, registrarUsuario };
