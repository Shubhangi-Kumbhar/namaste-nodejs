const express = require('express');

const app = express();

app.use('/test', (req, res) => {
  res.send('Testing from server');
});

app.use('/hello', (req, res) => {
  res.send('Hello from server');
});

app.use('/', (req, res) => {
  res.send('Hello from dashboard');
});

app.listen(7777, () => {
  console.log('Server is listening on port number 7777');
});
