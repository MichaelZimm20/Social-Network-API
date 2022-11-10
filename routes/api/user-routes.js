// import router 
const router = require('express').Router();

// import USER routes 
const { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controllers')


// GET all users route, POST create user route
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// By Ids, GET, PUT, DELETE
router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// export router 
module.exports = router;