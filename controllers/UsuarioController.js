const formularioLogin = (req, res) => {
  res.render("auth/login", { title: "Iniciar sesión" });
};

const formularioRegistro = (req, res) => {
  res.render("auth/registro", { title: "Registro" });
};

export { formularioLogin, formularioRegistro };
