const express = require("express");
const app = express();
const mongoose = require("./mongoDB/db");
// const helmet = require("helmet");
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");
const path = require("path");
// const cors = require("cors");


// mongoose
//   .connect(
//     "mongodb+srv://Jean:hostiedecalice@cluster0.k8vjmxm.mongodb.net/?retryWrites=true&w=majority",

//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("Connexion à MongoDB réussie !"))
//   .catch((error) => console.log("Connexion à MongoDB échouée !" + error));

// app.use(helmet());

// app.use(cors());
// cors();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
  

app.use(express.json());

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
