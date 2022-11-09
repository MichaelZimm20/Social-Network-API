// import schema and model from mongoose
const { Schema, model } = require('mongoose');

// import dateFormat function
const dateFormat = require('../utils/dateFormat');


// Reactions Schema 

// Thoughts Schema 
const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 128
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
);

// virtual to get the total reply count 
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// create the User model using the User Schema
const Thoughts = model('Thoughts', ThoughtSchema);

// export user model
module.exports = Thoughts;