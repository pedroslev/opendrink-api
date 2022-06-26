const express = require('express')
const { Server: HttpServer } = require('http')

//DB conex
const db = require('./mongo/mongo.js')

//db.dbConex();


//express to run server
const app = express();
const httpServer = new HttpServer(app)

//----------------------------Route Creation----------------------------
const data = express.Router();
const datatoMod = express.Router();


//----------------------------SERVER START----------------------------
const PORT = 8080;
httpServer.listen(PORT, () => console.log('Server on!'))