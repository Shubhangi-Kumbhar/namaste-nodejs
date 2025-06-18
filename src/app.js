const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.send('This is user get call');
});

app.post('/user', (req, res) => {
  res.send({ firstName: 'Shubhangi', lastName: 'Kumbhar', age: 31 });
});

app.delete('/user', (req, res) => {
  res.send('User details has been deleted successfully');
});

app.patch('/user', (req, res) => {
  res.send('Use details has been updated succesfully');
});
app.use('/user', (req, res) => {
  res.send('Hello from server');
});

app.listen(7777, () => {
  console.log('Server is listening on port number 7777');
});
