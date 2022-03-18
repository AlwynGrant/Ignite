import express,  { Application, Request, Response, NextFunction }  from 'express'
import { queryProjectToBack } from '../services/backer.service'
import { StatusError } from '../validators/index'


export const back_project = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId, 10),
          projId = parseInt(req.params.projId, 10),
          { contributeAmount } = req.body,
          backedProject = await queryProjectToBack(userId, projId, contributeAmount)

    return res.json({ backedProject })
}
