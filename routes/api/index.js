// import router
const router = require('express').Router();

// import user routes and thought Routes 
const userRoutes = require('./user-routes');



// add prefix to Routes 
router.use('/users', userRoutes);


// export router 
module.exports = router;