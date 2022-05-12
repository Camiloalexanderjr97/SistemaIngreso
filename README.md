# README
## _Uso de apliación de gestor de usuarios usando framework EXPRESS_
[![N|Solid](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png?alt=media&token=784b79f6-81b5-4308-97a2-155afb9d496f)](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png?alt=media&token=784b79f6-81b5-4308-97a2-155afb9d496f)

Es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs. El autor original es TJ Holowaychuk y la primera versión se lanzó el 2010. Express.js forma parte del programario MEAN, juntamente con MongoDB, Angular.js y Node.js.

## FrameWork (Instalación)

- Mediante la Url _https://nodejs.org/es/download/_ podremos descargar la app de instalación de _Node.js_ junto a su gestor de componentes _npm_ el cual nos permitirá realizar la instalación de las dependencias que se vayan a utilizar en los diferente
- Al haber realizado la respectiva instalación debemos realizar el comando ->npm init --yes para crear el packaje.json en donde se verán reflejadas las librerias (dependencias) a utilizar.
- Para utilizar "express" se deberá installar el modulo de expres, mediante el comando _npm i express_ el cual nos creará una carpeta con los node_modules.

## Modelamiento de la App

-Se deberá crear la jerarquia de carpetas donde se realizará el modelamiento según la arquitectura a utilizar.
![N|Solid](https://i.stack.imgur.com/vMCNG.png)

## Creación de servidor local

### index.js


> Clase generada para el despliegue y uso del servidor:

-Se deberá importar el modulo "_Express_" de la previamente librería ya instalada, la cual nos permitirá realizar el seguimiento en las rutas de nuestra aplicaicón.


![N|Solid](https://parzibyte.me/blog/wp-content/uploads/2019/05/Express-y-Node-Comenzar-proyecto.png) Despues de ya haber inicializado la construcción de las caracteristicas del servidor, podemos empezar a generar el cuerpo de la aplicación:


-Express nos permitirá utilizar el renderizado de templates, en esta ocasión usaremos _Handlebars_ el cuar nos permitirá pintar nuestra vista

 [![N|Solid](https://blog.teamtreehouse.com/wp-content/uploads/2011/03/handlebars.png)](https://handlebarsjs.com/)
> Handlebars compila plantillas en funciones de JavaScript. Esto hace que la ejecución de la plantilla sea más rápida que la mayoría de los otros motores de plantillas.

## Nodemon 
-Nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en los archivos del directorio.

- Nodemon no requiere ningún cambio adicional en su código o método de desarrollo. nodemon es un contenedor de reemplazo para node. Para usar nodemon, reemplace la palabra nodeen la línea de comando cuando ejecute su scrip 
- Instalacion (_npm i nodemon -D_) para poder ejecutar el servidor

## Rutas

-Al haber creado previamente la jerarquia de carpetas, podemos utilizar la ruta de "view" o "vista" para generar el index.html y desglozar los handlebar con etiquetas html con extensión _.hbs_
 ![N|Solid](https://i.stack.imgur.com/EPn8B.png)
 
 ## Routes
 
 -hace referencia a la definición de puntos finales de aplicación (URI) y cómo responden a las solicitudes de cliente. Para ver una introducción al direccionamiento, consulte Direccionamiento básico.

-Se puede usar metodos de RUTA : _Un método de ruta se deriva de uno de los métodos HTTP y se adjunta a una instancia de la clase express._

El siguiente código es un ejemplo de las rutas que se definen para los métodos GET y POST a la raíz de la aplicación: para realizar el renderizado de las vistas definidas.


```sh
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

```


## Arquitectura

![N|Solid](https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png)

Node.js utiliza la arquitectura «Single Threaded Event Loop» para manejar múltiples clientes al mismo tiempo.
- Node JS Web Server tiene internamente un Componente, conocido como "Event Loop". La razón por la que obtuvo este nombre es porque utiliza un bucle indefinido para recibir solicitudes y procesarlas. (Vea algunos pseudocódigos de Java para entender esto a continuación)
- Even Loop verifica que cualquier solicitud de cliente se coloque en la cola de eventos. Si no, espere indefinidamente las solicitudes entrantes.

