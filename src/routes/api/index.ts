import express from 'express'
const router = express.Router();

import sessionRouter from './session.route'
import projectRouter from './project.route'

router.use('/session', sessionRouter);
router.use('/project', projectRouter);

export default router;
