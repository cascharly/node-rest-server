const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    required: [true, "El correo es requerido "],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  img: {
    type: String,
    required: false,
  }, // no es obligatoria
  role: {
    type: String,
    default: "USER_ROLE",
  }, // default: 'USER_ROLE'
  estado: {
    type: Boolean,
    default: true,
  }, // Boolean
  google: {
    type: Boolean,
    default: false,
  }, // Boolean
});

module.exports = mongoose.model("Usuario", usuarioSchema);
