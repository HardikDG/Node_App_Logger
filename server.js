// Environment variables
require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http');

require('./config/database.js');
const logger = require('./helper/logger.js');

const mongoose = require('mongoose');

app.set('port', process.env.SERVER_PORT);

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
  

const morgan = require('morgan');

app.use(morgan('combined'));

app.use('/api/v1', require('./routes/v1'));

const server = http.createServer(app);

server.listen(process.env.SERVER_PORT, () => {
  logger.info(`Express server listening on port ${process.env.SERVER_PORT}`);
});  