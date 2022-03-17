import express,  { Application, Request, Response, NextFunction }  from 'express'
import { receive_test_response } from '../controllers/test.controller'

const router = express.Router();

// TEST ROUTE WORKING W/ DB QUERY
router.get('/', receive_test_response);

export default router
