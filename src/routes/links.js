const express = require("express");
const router = express.Router();
const pool = require("../database");
const path = require("path");
const multer = require("multer");

// router.use (express.static ("./public"));

router.get("/Admin/Principal", (req, res) => { 
  res.render("links/Admin/Principal");
});
router.get("/Admin/PrincipalRegistro", (req, res) => {
  res.render("links/Admin/PrincipalRegistro");
});
router.get("/Admin/PrincipalBuscar", (req, res) => {
  res.render("links/Admin/PrincipalBuscar");
});
router.get("/Admin/PrincipalRegistro", (req, res) => {
  res.render("links/Admin/PrincipalRegistro");
});
router.get("/Admin/RegistroCredencial", (req, res) => {
  res.render("links/Admin/RegistroCredencial");
});
// router.get("/Admin/PrincipalEditar", (req, res) => {
//   res.render("links/Admin/PrincipalEditar");
// });
router.get("/Users/Principal", (req, res) => {
  res.render("links/Users/Principal");
});
router.get("/Users/PrincipalBuscar", (req, res) => {
  res.render("links/Users/PrincipalBuscar");
});
router.get("/Users/PrincipalRegistro", (req, res) => {
  res.render("links/Users/PrincipalRegistro");
});
router.get("/Admin/Prueba", (req, res) => {
  res.render("links/Admin/Prueba");
});

router.get("/Admin/Usuarios", async (req, res) => {
  const usuario = await pool.query("SELECT * FROM usuario");
  res.render("links/Admin/Usuarios", { usuarios: usuario });
});

router.get("/Admin/Credenciales", async (req, res) => {
  const user = await pool.query("SELECT * FROM login");
  res.render("links/Admin/Credenciales", { login: user });
});

router.get("/Admin/Usuarios/:Cedula", async (req, res) => {
  const { Cedula } = req.params;

  const usuario = await pool.query(
    "DELETE FROM usuario WHERE CEDULA = ?",
    Cedula
  );

  req.flash("success", "Usuario Eliminado");
  res.redirect("/links/Admin/Usuarios");
});

router.get("/Admin/Editar/:Cedula", async (req, res) => {
  const { Cedula } = req.params;

  const usuario = await pool.query(
    "SELECT * FROM usuario WHERE CEDULA = ?",
    Cedula
  );
  console.log(usuario[0]);
  res.render("links/Admin/PrincipalEditar", { usuarios: usuario[0] });
});

router.post("/Admin/Editar/:Cedula", async (req, res) => {
  console.log('entra');
  const { Cedula } = req.params;
  const { Nombre, Edad} = req.body;

  const usuario = {
    Nombre,
    Edad,
  };
  console.log(usuario);
  await pool.query("UPDATE usuario set ? WHERE cedula = ? ", [usuario, Cedula]);
  console.log(usuario[0]);
  req.flash("success", "Usuario Modificado");
  res.redirect("/links/Admin/Usuarios");
});


router.get("/Admin/Mostrar/:Cedula", async (req, res) => {
  const { Cedula } = req.params;

  const usuario = await pool.query(
    "SELECT * FROM usuario WHERE CEDULA = ?",
    Cedula
  );
  console.log(usuario[0]);
  res.render("links/Admin/Persona", { usuarios: usuario[0] });
});



router.post("/Admin/MostrarF/:Cedula", async (req, res) => {
  
  console.log(req.file);
  const foto='http://localhost/img/'+req.file.originalname;
  console.log(foto);
  
 
  const { Cedula } = req.params;
  console.log('entra--'+Cedula);
  
  await pool.query("UPDATE usuario set Foto='"+foto+"' WHERE cedula ='" +Cedula+"'" );
 


  req.flash("success", "Foto Actualizada");
  res.redirect("/links/Admin/Mostrar/"+Cedula+"");
});




router.post("/Admin/PrincipalRegistro", (req, res) => {
  const { Cedula, Nombre, Edad, Foto } = req.body;
  const user = {
    Cedula,
    Nombre,
    Edad,
    Foto,
  };
  console.log(req.params);
  pool.query("INSERT INTO usuario SET ?", [user], (error, result) => {
    if (error) {
      console.log(error.sqlMessage);
      req.flash("message", "Usuario No registrado");
      res.redirect("/links/Admin/PrincipalRegistro");
      //  console.log("Inexistente");
      //
    }else{
      console.log(req.file);
          req.flash("success", "Usuario Registrado");
          res.redirect("/links/Admin/Usuarios");
    }

});
});


module.exports = router;
