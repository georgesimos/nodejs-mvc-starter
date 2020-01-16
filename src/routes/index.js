import express from 'express';
import authRouter from './api/auth';
import userRouter from './api/users';

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/users', userRouter);

export default router;
