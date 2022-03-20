import db from "../models";
import { backers } from "./backers.seeder";
import { projects } from "./projects.seeder";
import { users } from "./users.seeder";

export const seedUsers = () => {
    users.map((user) => {
         db.User.create(user)
    })
};

export const seedProjects = () => {
    projects.map((project) => {
         db.Project.create(project)
    })
};

export const seedBackers = () => {
    backers.map((backer) => {
         db.Backer.create(backer)
    })
};
