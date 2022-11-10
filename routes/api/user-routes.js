// import router 
const router = require('express').Router();

// import USER routes 
const { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controllers')


// GET all users route, POST create user route
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// By Ids, GET, PUT, DELETE
router 
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// Create and Delete friend routes
router 
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

// export router 
module.exports = router;