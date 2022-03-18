import express  from 'express'
import { session_signup, session_login, session_logout, session_test_get } from '../../controllers/session.controller';

import { validateLogin, validateSignup } from '../../validators/session.validator';
const router = express.Router();

router.get(
    '/test',
    session_test_get
);

router.post(
    '/signup',
    validateSignup,
    session_signup
);

router.post(
    '/login',
    validateLogin,
    session_login
);

router.delete(
    '/logout',
    session_logout
);

export default router
