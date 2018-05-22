var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

var IP_MALVADA = "::2";

app.use((request,response,next)=>{
    if (request.ip === IP_MALVADA){
        response.status(401).send("Intento de acceso no autorizado");
    } else {
        next();
    }
});

var publicPath = path.join(__dirname, 'public');
app.use('recursos',express.static(publicPath));

app.get('/',(request,response)=>{
    response.end('Bienvenid@ a mi página principal');
});

app.get('/about',(request,response)=>{
    response.end('Bienvendos a mi pagina sobre memes bien densos');
});

app.get('/weather',(request,response)=>{
    response.end('Hoy habrá un clima soleado');
});

app.get('/bienvenida/:nombre',(request,response)=>{
    response.end('Bienvenido,' + request.params.nombre +'');
});

app.use((request,response)=>{
    response.writeHead(404,{"Contente-type" : "text/html"});
    response.end("<h2>404 Not Found!</h2>");
})
http.createServer(app).listen(3000);