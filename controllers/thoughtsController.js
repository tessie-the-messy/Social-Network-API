const {Thought, User} = require('../models')

const thoughtsController = {
    getThoughts(req, res){Thought.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    },
    postThought(req, res){Thought.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
    },
    getThought(req, res){Thought.findOne({id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
    },
    deleteThought(req, res){Thought.findOneAndRemove({id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
    },
    updateThought(req, res){Thought.findOneAndUpdate({id: req.params.id}, {$set: req.body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
    },
    postReaction(req, res){Thought.findOneAndUpdate({
        id: req.params.id
    }, {$addToSet: {reactions: req.body}})
        .then(data => res.json(data))
        .catch(err => res.json(err))
},
    deleteReaction(req, res){Thought.findOneAndUpdate({
    id: req.params.id
}, {$pull: {reactions: {reactionId: req.params.reactionId}}})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
};

module.exports = thoughtsController;