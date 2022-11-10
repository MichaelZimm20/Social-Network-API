// import router 
const router = require('express').Router();

// import API routes 
const apiRoutes = require('./api');

// add prefix to api routes 
router.use('/api', apiRoutes);

// error validation if routes are invalid
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
  });
  
// export router
  module.exports = router;