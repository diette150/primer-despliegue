//pagina de bootstrap ver componentes 
//https://getbootstrap.com/docs/4.5/components/alerts/
const express = require('express');
const app = express();
const port=process.env.PORT || 3000;

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

