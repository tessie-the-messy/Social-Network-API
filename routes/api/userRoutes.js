const router = require('express').Router();
const {
    getUsers, 
    getUser, 
    postUser, 
    updateUser, 
    deleteUser,
    postFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(postUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:id').post(postFriend).delete(deleteFriend);

module.exports = router;