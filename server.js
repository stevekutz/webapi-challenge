const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const ActionRouter = require('./data/helpers/actionRouter.js');
const ProjectRouter = require('./data/helpers/projectRouter.js');

const server = express();

server.use(express.json());  
server.use(helmet());
server.use(logger('dev'));


server.use('/projects', ProjectRouter);
server.use('/actions', ActionRouter);

server.get('/', (req, res) => {
    res.send(`<h2>the homies are here !!!!</h2>`);
});

module.exports = server;

