const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render("mascotas",{
        arrayMascotas:[ 
            {id:'m001',nombre:'rex',descripcion:'perro'},
            {id:'m002',nombre:'tom',descripcion:'gato'}, 
        ]
    })
})


module.exports=router;