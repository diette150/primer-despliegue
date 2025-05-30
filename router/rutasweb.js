const express=require('express');
const router=express.Router();

//dos rutas trasladadas de vistas2.js
//cambiar router por app

router.get('/',(peticion,respuesta)=>{
    respuesta.render("index",{titulo:"mi titulo dinamico"})
})

router.get('/servicios',(peticion,respuesta)=>{    
    respuesta.render("servicios",{tituloser: "mi titulo dinamico de servicios",
                                  trabajos:"reparaciones-adaptaciones"  
    })
})

//exporta las rutas a vistas2.js
module.exports=router;