//pagina de bootstrap ver componentes 
//https://getbootstrap.com/docs/4.5/components/alerts/
const express = require('express');
const app = express();
require('dotenv').config()
const port=process.env.PORT || 3000;
//conexion a base de datos con mongoose
const mongoose= require('mongoose');

const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xfycros.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri,
    {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('base de datos conectada') )
.catch(e => console.log(e))
//hasta aqui lo necesario para conectar bd

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + "/public")) 

//llamado a las rutas
app.use('/',require('./router/rutasweb'));

app.use('/mascotas',require('./router/mascotas'))



app.use((peticion,respuesta,next)=>{
    respuesta.status(404).sendfile(__dirname + "/public/404.html")
}) 

app.listen(port,()=>{
    console.log('servidor escuchsndo en puerto',port)
})

