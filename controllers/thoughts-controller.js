// import User Model
const { Thought, User,  } = require('../models');

// thoughts controller setup
const thoughtsController = {

    // GET, get all thoughts 
    getAllThoughts(req,res) {
        Thought.find({})
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // GET, get a single thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.userId })

    },

     // POST, create a User 
     createThought({ body }, res) {
        Thought.create(body)
        .then(thoughtsData => res.json(thoughtsData))
        .catch(err => res.status(400).json(err));  
    },

    // PUT, update a thought by its id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate()
    },

    // DELETE, remove a thought by its id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.userId })
    },

    // POST, create a reaction stored in a single thought's reactions
    addReaction({ params }, res) {
        User.findOneAndUpdate()
    },

    // DELETE, pull and remove a reaction by the reaction's reactionId
    removeReaction({ params }, res){
        User.findOneAndUpdate()
    }
}

// export thoughts controller 
module.exports = thoughtsController