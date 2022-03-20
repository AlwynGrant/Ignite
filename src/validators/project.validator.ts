import { check } from 'express-validator';
import { handleValidationErrors } from '.';
import db from '../../models';

// this will serve as validations for both create and update endpoints
export const validateProject = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid title.')
        .isLength({ min: 2, max: 255 })
        .withMessage('Project titles must be between 2 and 255 characters.'),
    check('subTitle')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid sub title.')
        .isLength({ min: 2, max: 500 })
        .withMessage('Project sub titles must be between 2 and 500 characters.'),
    check('targetLaunchDate')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid release date.'),
    check('fundingGoal')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid goal amount.'),
    check('story')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid story.')
        .isLength({ min: 2, max: 5000 })
        .withMessage('Provide your ideas to prospective backers, stories must be 2 least 2 characters, up to a maximum of 5000 characters.'),
    handleValidationErrors,
];
