const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre:String,
    descripcion:String
})
//CREAR MODELO
const Mascota = mongoose.model('Mascota',mascotaSchema);
module.exports = Mascota;