const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            // unique
            required: true,
            // trimmed?
        },
        email: {
            type: String,
            // unique
            required: true, 
            // must match valid email address

        },
        thoughts: [thoughtsSchema],
        friends: [userSchema]
        // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    }
)

const User = model('user', userSchema)

module.exports = User;