const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const exphbs = require('express-handlebars');
const path = require('path'); 
const { request } = require('http');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('./keys');
const passport = require('passport');



// Inicializar express
const app = express();
require('./lib/passport');    

//  Configuración

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    // ContenidoDir: path.join(app.get('views'), 'Contenido'),
    extname: '.hbs',
    helpers: require('./lib/handdlebars')
}));

app.set('view engine', 'hbs');

// Middelwares
app.use(session({
    secret: 'LoginUser',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

const storage = multer.diskStorage({
    destination: path.join('C:\\xampp\\htdocs\\img'),
    filename: (req, file, cb) => {
        cb(null,  file.originalname);
    }
  });

app.use(multer({
    storage,
    dest: path.join(__dirname, 'http://localhost/img/')
}).single('image'));




// Global Variables

app.use((req, res, next) => {
    app.locals.success = req.flash('success');    
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

// Rutas
app.use(require('./routes'));
app.use(require('./routes/autentications'));
app.use('/links', require('./routes/links'));


//public
app.use(express.static(path.join(__dirname, 'public')));


// Iniciar el servidor

app.listen(app.get('port'), () => {

    console.log('Server on port', app.get('port'));

});
