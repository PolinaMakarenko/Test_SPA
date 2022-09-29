require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('cors')({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

const PORT = process.env.PORT || 4000;

const tableRouter = require('./routes/table.router');

app.use('/table', tableRouter);

app.listen(PORT, () => {
    console.log(`Сервер работает на порту: ${PORT}`);
  });
