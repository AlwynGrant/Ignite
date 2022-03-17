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

    await setTokenCookie(res, newUser);

    return res.json({ newUser });

}


export const session_login = async (req: Request, res: Response, next: NextFunction) => {
        const { credential, password } = req.body;

        const user = await login(credential, password);

        if (!user) {
            const err = new StatusError('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The username or password is invalid.'];
            return next(err);
        }

        await setTokenCookie(res, user);

        return res.json({ user });
}


export const session_logout = async (req: Request, res: Response) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }


//  TODO: RESTORE USER INFO
