// import schema and model from mongoose
const { Schema, model, Types } = require('mongoose');

// import dateFormat function
const dateFormat = require('../utils/dateFormat');

// Reactions Schema 
const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


// Thoughts Schema 
const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
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
        // use ReactionSchema to validate data for a reactions
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false

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