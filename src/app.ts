import express, { Application, Request, Response, NextFunction } from 'express';
import db from '../models'
import { users } from '../seeders/users.seeder'
import { projects } from '../seeders/projects.seeder'
import { backers } from '../seeders/backers.seeder'
import testRouter from './routes/test.route'

const app: Application = express();
const port = 5000;

app.use('/test', testRouter)

const seedUsers = () => {
    users.map((user) => {
        db.User.create(user)
    })
};

const seedProjects = () => {
    projects.map((project) => {
        db.Project.create(project)
    })
};

const seedBackers = () => {
    backers.map((backer) => {
        db.Backer.create(backer)
    })
};

// seedUsers();
// seedProjects();
// seedBackers();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Express server currently running...')
    });
});
