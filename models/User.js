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
        thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
        friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
        
    }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('user', userSchema)

module.exports = User;