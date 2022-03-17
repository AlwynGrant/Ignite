import express,  { Application, Request, Response, NextFunction }  from 'express'
import { QueryProductsForDemoTest } from '../services/test.service'
// receive_test_response()

interface ProjectDetails {
  userId: number;
  title: string;
  category: string;
  subTitle: string;
  image: string;
  targetLaunchDate: string;
  fundingCurrent: number;
  fundingGoal: number;
  story: string;
}

export const receive_test_response = async (req: Request, res: Response) => {
    const demoProjects = await QueryProductsForDemoTest()

    res.send(demoProjects)
}
