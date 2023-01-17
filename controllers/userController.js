const { Thought, User } = require("../models");

const userController = {
  getUsers(req, res) {
    User.find()
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  postUser(req, res) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  getUser(req, res) {
    User.findOne({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  postFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
