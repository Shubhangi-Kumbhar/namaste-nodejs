const adminAuth = (req, res, next) => {
  console.log('Admin Auth is getting checked!!!');
  const token = 'shubhsumit';
  const isAuthenticated = token === 'shubhsumit';
  if (!isAuthenticated) {
    res.status(401).send('Unautherized User!!!');
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log('Admin Auth is getting checked!!!');
  const token = 'shubhsumit';
  const isAuthenticated = token === 'advik';
  if (!isAuthenticated) {
    res.status(401).send('Unautherized User!!!');
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
