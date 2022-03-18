import express from 'express'
const router = express.Router();

import sessionRouter from './session.route'
import projectRouter from './project.route'
import backerRouter from './backer.route'

router.use('/session', sessionRouter);
router.use('/project', projectRouter);
router.use('/backer', backerRouter);

export default router;
