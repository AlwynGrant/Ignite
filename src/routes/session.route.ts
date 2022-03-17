import express,  { Application, Request, Response, NextFunction }  from 'express'
import { session_signup, session_login, session_logout } from '../controllers/session.service';
import asyncHandler from 'express-async-handler';
import { validateLogin, validateSignup } from '../validators/session.validators';
const router = express.Router();

router.post(
    '/signup',
    validateSignup,
    asyncHandler,
    session_signup
);

router.post(
    '/login',
    validateLogin,
    asyncHandler,
    session_login
);

router.delete(
    '/logout',
    asyncHandler,
    session_logout
);

export default router
