import express from 'express';
import auth from '../../config/auth';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../../controllers/users';

const router = express.Router();
/**
 * @route   POST /users
 * @desc    Register new user
 * @access  Public
 */
router.post('/', createUser);

/**
 * @route   GET /users
 * @desc    Get all users
 * @access  Private
 */
router.get('/', auth, getUsers);

/**
 * @route   GET /users/:id
 * @desc    Get user by id
 * @access  Private
 */
router.get('/:id', auth, getUserById);

/**
 * @route   PUT /users/:id
 * @desc    Update user by id
 * @access  Private
 */
router.put('/me', auth, updateUser);

/**
 * @route   DELETE /users/:id
 * @desc    Delete user by id
 * @access  Private
 */
router.delete('/:id', auth, deleteUser);

module.exports = router;
