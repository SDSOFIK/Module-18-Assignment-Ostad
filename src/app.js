const express = require('express');

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const apiRoutes = require('./controllers/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);


app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Student API is running',
    data: {
      docs: '/api/students',
    },
  });
});

app.use('/api', apiRoutes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;