// import router 
const router = require('express').Router();

// import USER routes 
const { 
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');


// GET all users route, POST create user route
router
    .route('/')
    .get(getAllThoughts)
    // .post(createThought);

router
    .route('/:userId')
    .post(createThought);

// By Ids, GET, PUT, DELETE
router 
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


// Create and Delete reactions routes
router 
    .route('/:thoughtId/reactions')
    .post(addReaction)
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

// export router 
module.exports = router;