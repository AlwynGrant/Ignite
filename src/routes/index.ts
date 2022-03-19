import express from 'express'
const router = express.Router();
import apiRouter from './api'

router.use('/api', apiRouter);

// router.get('/csrf/restore', (req, res) => {
//   res.cookie('XSRF-Token', req.csrfToken());
//   res.send({test:'hello-world'});
// });

// router.post('/csrf/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

export = router;
