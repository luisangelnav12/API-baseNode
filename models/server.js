const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuauriosPath = "/api/usuarios";
    //middlewares
    this.middlewares();
    //rutas de aplicacion
    this.routes();
  }
  middlewares() {
    //ditectorio publico
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usuauriosPath, require("../routes/user"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is running on port " + this.port);
    });
  }
}
module.exports = Server;
