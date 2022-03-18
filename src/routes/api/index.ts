import express from 'express'
const router = express.Router();

import sessionRouter from './session.route'


router.use('/session', sessionRouter);


export default router;
