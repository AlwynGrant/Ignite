import express, { Application, Request, Response, NextFunction } from 'express';
import db from '../models'

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'

import routes from './routes'

const { environment } = require('../config/config.js');
const isProduction = environment === 'production';

const app: Application = express();
const port = 5000;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if (!isProduction) app.use(cors());
app.use(helmet({contentSecurityPolicy: false}));
app.use(csurf({cookie: {secure: isProduction, sameSite: isProduction && "lax", httpOnly: true}}));

app.use(routes);

// seedUsers();
// seedProjects();
// seedBackers();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Express server currently running...')
    });
});
