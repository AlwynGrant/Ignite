import express from 'express'
const router = express.Router();
import apiRouter from './api'

router.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(path.resolve(__dirname, '../../views', 'build', 'index.html'));
    });

    router.use(express.static(path.resolve("../views/build")));

    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(path.resolve(__dirname, '../../views', 'build', 'index.html'));
    });
}

if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.status(201).json({});
    });
}

export = router;
