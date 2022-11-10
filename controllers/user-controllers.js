// import User Model
const { User } = require('../models');

const userController = {

    // GET, all users
    getAllUsers(req,res) {
        User.find({})
        .populate({
            path: 'thought',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // GET, user by Id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thought',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(singleUserData => {
            // IF no pizza is found, send 404
            if (!singleUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json(singleUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // POST, create a User 
    createUser({ body }, res) {
        User.create(body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));  
    }
}