require("./config/config");

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/usuario"));

const uri =
  "mongodb+srv://mern_user:NrEvsdGFJAa0Rs8U@cluster0.fx5ag.mongodb.net/cafe";
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;
    console.log("Base de datos online");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando en puerto:", process.env.PORT);
});
