const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let rolesValidos = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un rol válido",
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    unique: true,
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
    enum: rolesValidos,
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

// No muestro la password en la vuelta de respuesta
usuarioSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

usuarioSchema.plugin(uniqueValidator, { message: "{PATH} debe de ser único" });

module.exports = mongoose.model("Usuario", usuarioSchema);
