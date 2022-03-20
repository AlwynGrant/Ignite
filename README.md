# Ignite

Live site: [Ignite](pending)

Ignite is a kickstarter app where users can become a backer, contributing to some of the greatest ideas out right now, or lead the charge and bring innovative and fun ideas to the world. 

<!-- INTRO PIC HERE  -->
![]()

## Getting Started

### Backend 

1) Clone this directory, it will have everything you'll need to get the application started.
2) In the root directly, run npm install.
3) Create an .env file in the root directory and enter in the the following information (an exmaple env is also provided) 
   Once you enter in all relevant information, this file will be used to start auto start your database. 
   
```
DB_USER=<enter_db_username_here>
DB_NAME=<enter_db_name_here>
DB_PASS=<enter_db_password_here>
HOST=localhost
JWT_SECRET=<secret_here>
JWT_EXPIRES_IN=604800
```

4) From the root directory, run the following commands to get your database started and populated: <br />
    a ```npx sequelize-cli db:create``` <br />
    b ```npx sequelize-cli db:migrate``` <br />
    c NOTE: if you'd like some seed data: <br />
                  uncomment the seed Functions in ```src > app.ts``` and run ```npm run dev``` to populate the db with generic seed data. 

5) Run ```npm run build``` This will compile all Typescript files into a single directory called ```/dist```
6) Lastly, run ```npm start``` to turn your server on 

### Frontend

1) Go to ```views``` directory, and run ```npm install```
2) You can then run ```npm start``` from here to start your frontend API

## Technologies used 

This app was primarily created on the (P)osgres(E)xpress(R)eact(N)ode.js stack but written with strict typing in mind using Typescript almost exclusively. 
The file structure is heavily inspired by the MCV (Model View Controller) design pattern. I felt this was the best decision to make with regards to the pern stack,
and Typescript. I truly feel they go hand in hand in maximizing modularization & readability. 

[file-structure](https://ibb.co/ZSyRWdS)

The Model represents my ```Models``` folder, where I hold all database Models and Model relationships. 

The relationships are as follows: 

```Users``` have a 1-N relationship with ```Products```
```Users``` also have a M-M relationship with ```Products``` ```through``` ```Backers```

This allows for seperation of logic when querying and avoids unneeded complexity when establishing 
core relationships between ```Users``` and ```Products```.

The Controller represents my ```src``` folder and is divided logically into 3 main sub-directories. Controllers, routes, and services. 

The ```controller``` dir services as the handle and outsourcing of logic between the model and the views.
The ```routes``` dir dictates which set of logic the controller needs to intract with to send back appropriate responses.
The ```Services``` dir serves as the handle for all queries and database data manipulation such as the standard CRUD features, CREATE, READ, UPDATE, & DELETE.

With all of these modularized, I find it incedibily easy navigate and I hope you do too!

## 3rd Party API

Originally, I planned to implement AWS S3 to serve and store media data for Ignite, however, due to time constraints, I'm unable to do it at this time. I plan to implement this API in the future giving end-users the ability to efficiently upload images and gifs that can best serve thier products needs. 

## A peak at the app

[Home-page](https://ibb.co/H2RDXnC)

I really enjoyed building this app, and hope to further it in the future, it was my true first time interacting with Typescript in such a deep way! 
    
