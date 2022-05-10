const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

//Crear Credencial
passport.use('local.Credencial', new LocalStrategy({

    usernameField: 'Cedula',
    passwordField: 'Password', 
    passReqToCallback: true,
    
}, async (req, Cedula, password, done) => {

    const { usuario } = req.body;
    const Estado="1";
    const Tipo ="Admin";
    const newUser = {
        Cedula,
        usuario,
        password,
        Estado,
        Tipo
    };
    
    newUser.password = await helpers.encryptPassword(password);

    const resultado = await pool.query('INSERT INTO login SET ?', [newUser]);
     newUser.Id = resultado.insertId;

    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
      done(null, user.Id);
  });
  
  passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM login WHERE id = ?', [id]);
    done(null, rows[0]);
  });





 //Loguearse
passport.use('local.login', new LocalStrategy({
    
    usernameField: 'Cedula',
    passwordField: 'Pass', 
    passReqToCallback: true,
    

  }, async (req, username, password, done) => {

    const { Usuario } = req.body;
    const newUser = {
        username,
        Usuario,
        password,
    };

    const sql= "SELECT * FROM login WHERE cedula =  '"+username+"'";
    const rows = await pool.query(sql);
    const sql2= "SELECT Foto FROM usuario WHERE cedula =  '"+username+"'";
    const rowss = await pool.query(sql2);
    userF=rowss[0];
    console.log(userF);
  
    if (rows.length > 0) {
      const user = rows[0];
      const validPassword = await helpers.matchPassword(password, user.Password)
      
      if (validPassword) {
        done(null, user,userF, req.flash('success', 'Welcome ' + user.Usuario));
      } else {
        done(null, false, req.flash('message', 'Incorrect Password'));
      }
    } else {
      return done(null, false, req.flash('message', 'The Username does not exists.'));
    }
  }));


  
