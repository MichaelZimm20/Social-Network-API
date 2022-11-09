// import schema and model from mongoose
const { Schema, model } = require('mongoose');

// user Schema 
const UserSchema = new Schema (
    
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please type a valid email address!']
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
            }
        ],
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ],

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// virtual to total count of friends


// create the User model using the User Schema
const User = model('User', UserSchema);

// export user model
module.exports = User;