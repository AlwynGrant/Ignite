import express,  { Application, Request, Response, NextFunction }  from 'express'
import { signUp, login } from '../services/session.service'
import { setTokenCookie } from '../utility'
import { StatusError } from '../validators/index'
import User from '../../models'

export const session_signup = async (req: Request, res: Response) => {
    const { email, firstName, lastName, password } = req.body
    const newUser = await signUp(
        email,
        firstName,
        lastName,
        password
    )

    res.send({ newUser });
}


export const session_login = async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;

        const user = await login(email, password);

        if (!user) {
            const err = new StatusError('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The username or password is invalid.'];
            return next(err);
        }
        
        res.send({ user });
}


export const session_logout = async (req: Request, res: Response) => {
        // TODO: LOG USER OUT
        res.send({ message: 'success' });
    }
