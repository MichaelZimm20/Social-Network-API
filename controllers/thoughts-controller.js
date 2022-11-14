// import User Model
const { Thought, User } = require('../models');

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
        Thought.findOne({ _id: params.thoughtId })
        .select('-__v')
        .then(singleThoughtData => {
            // IF no thought is found, send 404
            if (!singleThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(singleThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

     // POST, create a User 
     createThought({ body, params }, res) {
        Thought.create(body)
            .then(thoughtsData => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: thoughtsData._id } },
                    { new: true }
                )
                
            })
            .then(thoughtsData => res.json(thoughtsData))
            .catch(err => res.status(400).json(err));  
    },

    // PUT, update a thought by its id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: thoughtId },
            body,
            { new: true, runValidators: true }
        )
            .then(updateData => {
                if (!updateData) {
                    res.json({ message: ' No thought can be found by this id!' })
                } else {
                    res.json(updateData)
                }
            })
            .catch(err => res.json(err));
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