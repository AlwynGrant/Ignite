import express, { Application } from 'express';
import db from '../models'

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'
import routes from './routes'

const app: Application = express();
const port = 5000;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

app.use(routes);

// seedUsers();
// seedProjects();
// seedBackers();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Express server currently running...')
    });
});
