const express = require('express');

const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth');
// Get adminRoutes with use of middlware function for authentication

// Create admin data
app.post('/admin/createAdminData', adminAuth, (req, res, next) => {
  res.send('Admin data created successfully!!!');
});

// Get admin data
app.get('/admin/getAdminData', adminAuth, (req, res, next) => {
  res.send('Admin data sent successfully!!!');
});

// Update admin data
app.put('/admin/updateAdminData', adminAuth, (req, res, next) => {
  res.send('Admin data updated successfully!!!');
});

// Delete admin data
app.delete('/admin/deleteAdminData', adminAuth, (req, res, next) => {
  res.send('Admin data deleted successfully!!!');
});

// Create User routes with the use of middleware function

// User SignUp route
app.use('/user/signup', (req, res, next) => {
  res.send('User Signed up successfully!!!');
});

// User login route
app.use('/user/login', (req, res, next) => {
  res.send('User logged in successfully!!!');
});

// GetUser data routes
app.use('/user/getUserData', userAuth, (req, res, next) => {
  res.send('User data sent successfully!!!');
});

// PostUser data routes
app.use('/user/createUserData', userAuth, (req, res, next) => {
  res.send('User data created successfully!!!');
});

// UpdateUser data routes
app.use('/user/updateUserData', userAuth, (req, res, next) => {
  res.send('User data updated successfully!!!');
});

// DeleteUser data routes
app.use('/user/deleteUserData', userAuth, (req, res, next) => {
  res.send('User data deleted successfully!!!');
});

// app.use('/', (req, res, next) => {
//   res.send('Handling routes!!!');
// });

app.listen(7777, () => {
  console.log('Server is listening on port number 7777');
});
