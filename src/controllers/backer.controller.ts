import express,  { Application, Request, Response, NextFunction }  from 'express'
import { queryProjectToBack, updateFundingByBackerAmount } from '../services/backer.service'
import { StatusError } from '../validators/index'


export const back_project = async (req: Request, res: Response) => {
    const projId = parseInt(req.params.projId, 10),
          { amount, userId } = req.body,
          numAmount = parseInt(amount, 10)

    const backedProject = await queryProjectToBack(userId, projId, numAmount)
    await updateFundingByBackerAmount(numAmount, projId)
    return res.json({ backedProject })
}
