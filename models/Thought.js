const moment = require('moment');
const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
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
            type: Date,
            default: moment().format('L')
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        }
    },
{toJSON: {
    getters: true
}, id: false}
)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: moment().format('L')
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
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema)

module.exports = Thought;