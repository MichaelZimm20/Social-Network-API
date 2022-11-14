// import router
const router = require('express').Router();


// import user routes and thought Routes 
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');


// add prefix to Routes 
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);


// export router 
module.exports = router;