// Instalo en terminal:
// npm init --yes
// npm install express
// npm i nodemon --D
// npm install --save express-handlebars
// npm install --save jquery
// npm install --save bootstrap

// Creo carpeta views y dentro de ella creo carpeta partials
// Dentro de carpeta views creo main.handlebars

//crear un servidor con express
const express = require('express'); //importo
const exphbs = require('express-handlebars'); //importo paquete
const app = express(); //instancio express
const PORT = process.env.PORT || 3000; //puerto asignado a variable | Si tiene una variable de ambiente que la tome, de lo contrario toma el puerto 3000

// Defino motor de plantillas 
app.set("view engine", "handlebars");

// Configuro motor de plantilla
app.engine('handlebars', exphbs.engine({
    extname: '.handlebars', // Extensiones de los archivos de plantillas
    defaultLayout: 'main', // Plantilla principal
    layoutsDir: __dirname + '/views', // Directorio de las plantillas principales
    partialsDir: __dirname + '/views/partials' // Directorio de los partials
}));

// Defino la ruta de los archivos estáticos(para imágenes), carpeta pública
app.use(express.static(__dirname + "/assets/img"));
app.use(express.static(__dirname + "/assets/js"));

//crear un middleware que define una ruta /bootstrap y libere el contenido de la carpeta "css", dependencia de bootstrap en el node_module (punto cinco) previamente instalada con nmp
app.use('/bootstrap',
    express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//crear un middleware que define una ruta /bootstrap y libere el contenido de la carpeta "js", dependencia de bootstrap en el node_module (punto cinco) previamente instalada con nmp
app.use('/bootstrapjs',
    express.static(__dirname + '/node_modules/bootstrap/dist/js'));


//crear un middleware que define una ruta /jquery y libere el contenido de la carpeta "dist", dependencia de bootstrap en el node_module (punto cinco) previamente instalada con nmp
app.use('/jquery',
    express.static(__dirname + '/node_modules/jquery/dist'));

//crea ruta raíz del server usando método render de res con la carpeta main.handlebars ubicada en carpeta views
//desde el render enviar un arreglo con los nombres de los productos (punto uno) que coincidan con las imágenes de cada producto

app.get('/', function (req, res) { 
    res.render("main", {  //plantilla principal 
        layout: "main",
        productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"]
    });
});

// Iniciar el servidor. puerto escuchando
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});

//ruta genérica
// app.use('*', (req, res) => console.log('Esta página no existe'));