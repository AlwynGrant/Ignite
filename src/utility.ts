import express, { Application, Request, Response, NextFunction } from 'express';
const { jwtConfig } = require('../config/config.ts');
import jwt from 'jsonwebtoken';

const { secret, expiresIn } = jwtConfig


export const setTokenCookie = (res: Response, user: any) => {
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) },
    );

    res.cookie('Token', token, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
    });

    return token;
};
