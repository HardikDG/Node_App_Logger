const mongoose = require('mongoose');
const logger = require('../helper/logger');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', (err) => {
  logger.error(err);
});
