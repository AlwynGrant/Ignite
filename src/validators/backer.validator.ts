import { check } from 'express-validator'
import { handleValidationErrors } from '.';


export const validateContribution = [
    check('amount')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid amount to contribute. The minimum is $1.00 USD'),
    handleValidationErrors,
];
