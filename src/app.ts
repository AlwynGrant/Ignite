import express, { Application, Request, Response, NextFunction } from 'express';
import db from '../models'
import { users } from '../seeders/users.seeder'
import { projects } from '../seeders/projects.seeder'
import { backers } from '../seeders/backers.seeder'


const app: Application = express();
const port = 5000;

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

// TEST ROUTE WORKING W/ DB QUERY
app.get('/', (req: Request, res: Response) => {
    db.Project.findAll({ where: { userId: 1 }})
        .then((result: object) => {
            res.send(JSON.stringify(result))
      }).catch((err: object) => {
            res.send(console.log(err))
      })
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Express server currently running...')
    });
});
