import express, { Application, Request, Response, NextFunction } from 'express';
import db from '../models'

const app: Application = express();
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Heyo!')
})

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Express server currently running...')
    })
})
