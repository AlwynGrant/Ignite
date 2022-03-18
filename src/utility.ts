import express, { Application, Request, Response, NextFunction } from 'express';
const { jwtConfig } = require('../config/config.js');
import jwt from 'jsonwebtoken';

const { secret, expiresIn } = jwtConfig


export const setTokenCookie = (res: Response, user: any) => {
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) },
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie('token', token, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "lax",
    });

    return token;
};
