var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send('Utilizando el verbo GET');
});

app.post('/',(req,res)=>{
    res.send('Utilizando el verbo POST')
});
app.put('/',(req,res)=>{
    res.status(400).send('Utilizando el verbo PUT')
});
app.delete('/',(req,res)=>{
    res.status(500).send('Utilizando el verbo DELETE')
});

app.listen(3000,()=>{
    console.log('La aplicación está corriendo por el puerto 3000');
});
    