import express  from 'express'
import { back_project } from '../../controllers/backer.controller';
import { validateContribution } from '../../validators/backer.validator';

const router = express.Router();

router.post(
    '/:userId/back/:projId',
    validateContribution,
    back_project
);

export default router
