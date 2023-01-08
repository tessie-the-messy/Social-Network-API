const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],

    },
    {
        toJSON: {
          getters: true,
        },
      }
)

const reactionSchema = new Schema(
    {
        reactionID: {
            // Use Mongoose's ObjectId data type
            // Default value is set to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        }
    }
)