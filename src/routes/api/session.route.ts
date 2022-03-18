import express  from 'express'
import { session_signup, session_login, session_logout, session_test_get } from '../../controllers/session.service';
import asyncHandler from 'express-async-handler';
import { validateLogin, validateSignup } from '../../validators/session.validators';
const router = express.Router();

router.get(
    '/test',
    session_test_get
);

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
