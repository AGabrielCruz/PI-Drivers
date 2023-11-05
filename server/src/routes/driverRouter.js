// Aca dejamos el enrutado lo mas simple posible, y las funciones las pasamos a los handlers que son lo que se encargan de los errores y los controllers de las funcion que va a hacer cada ruta. 


const { Router } = require("express");

const getDriverHandler = require("../handlers/getDriverHandler")
const getDriverIdHandler = require("../handlers/getDriverIdHandler")
const getDriverNameHandler = require("../handlers/getDriverNameHandler");
const postDriverHandler = require("../handlers/postDriverHandler");
const driverRouter = Router();


driverRouter.get("/", getDriverHandler)

driverRouter.get("/:id", getDriverIdHandler);

driverRouter.get("/name" , getDriverNameHandler );

driverRouter.post("/", postDriverHandler);

module.exports = driverRouter; 
