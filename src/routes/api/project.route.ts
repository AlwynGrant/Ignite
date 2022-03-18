import express  from 'express'
import { project_get_one, project_get_all, project_create, project_update, project_delete } from '../../controllers/project.controller';
import asyncHandler from 'express-async-handler';
import { validateProject } from '../../validators/project.validator';
const router = express.Router();

router.get(
    '/:id',
    project_get_one
);

router.get(
    '/all',
    project_get_all
);

router.post(
    '/new',
    validateProject,
    project_create
);

router.patch(
    '/:id/update',
    validateProject,
    project_update
);

router.delete(
    '/:id/delete',
    project_delete
);

export default router
