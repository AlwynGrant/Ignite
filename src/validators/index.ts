import express,  { Application, Request, Response, NextFunction }  from 'express'
import { check, validationResult } from 'express-validator'

export class StatusError extends Error {
  status: number | undefined;
  title: string | undefined;
  errors: string[] | undefined;
}


export const handleValidationErrors = (req: Request, _res: Response, next: NextFunction) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => `${error.msg}`);

        const err = new StatusError('Bad request.');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

