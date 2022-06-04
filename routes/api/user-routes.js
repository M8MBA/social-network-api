const router = require('express').Router();

const { getAllUsers, createUser, getUserById, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;