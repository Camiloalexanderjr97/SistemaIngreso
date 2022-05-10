const express = require("express");
const router = express.Router();

const passport = require("passport");

router.get("/links/Login", (req, res) => {
  res.render("links/Login");
});

//Logueo

router.post('/links/Login', (req, res, next) => {
 passport.authenticate("local.login", {
    successRedirect: "/links/Admin/Principal",
    failureRedirect: "/links/Login",
    failureFlash: true,
  })(req, res, next);
});

//Credencial

router.post('/links/Admin/RegistroCredencial', passport.authenticate('local.Credencial', {
  successRedirect: '/links/Admin/Credenciales',
  failureRedirect: '/links/Admin/RegistroCredencial',
  failureFlash: true
}));




module.exports = router;
