const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');
const { globalErrorHandler } = require('./utils/error');

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(routes);

  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
  });

  app.use(globalErrorHandler);

  return app;
};

module.exports = { createApp };
