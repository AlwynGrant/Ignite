import express  from 'express'
import { project_get_one, project_get_all, project_create, project_update, project_delete } from '../../controllers/project.controller';
import { validateProject } from '../../validators/project.validator';
const { singleMulterUpload } = require('../../awss3')
const router = express.Router();

router.get(
    '/all',
    project_get_all
);

router.get(
    '/:projId',
    project_get_one
);

router.post(
    '/new',
    // validateProject,
    singleMulterUpload("image"),
    project_create
);

router.patch(
    '/:projId/edit',
    validateProject,
    project_update
);

router.delete(
    '/:projId/delete',
    project_delete
);

export default router
