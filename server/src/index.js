import express from 'express';
import http from 'http';
import serverConfig from '../src/frameworks/webserver/server.js';
import expressConfig from '../src/frameworks/webserver/express.js'
import connectToMongoDb from './frameworks/webserver/database/mongoose/connection.js';
import routes from './frameworks/Routes/Routes.js';

const app = express();
const server = http.createServer(app);

//* connecting mongoDb 
connectToMongoDb();

//* express config connection
expressConfig(app);

//* starting the server with server config
serverConfig(server).startServer();


// routes
routes(app);