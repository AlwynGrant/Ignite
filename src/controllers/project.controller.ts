import express,  { Application, Request, Response, NextFunction }  from 'express'
import { queryOneProject, queryAllProjects, createNewProject, updateProject, deleteProject } from '../services/project.service'


export const project_get_one = async (req: Request, res: Response) => {
    const projId = parseInt(req.params.id, 10);
    const project = await queryOneProject(projId);
    return res.json({ project: project }).status(200)
}


export const project_get_all = async (req: Request, res: Response) => {
    const projects = await queryAllProjects();
    return res.json({ projectList: projects }).status(200)
}


export const project_create = async (req: Request, res: Response) => {
        const newProject = await createNewProject(
                  req.body.userId,
                  req.body.title,
                  req.body.category,
                  req.body.subTitle,
                  req.body.image,
                  req.body.targetLaunchDate,
                  req.body.fundingGoal,
                  req.body.story
        );
        return res.json({ newProject })
}


export const project_update = async (req: Request, res: Response) => {
    const projId = parseInt(req.params.id, 10);
    const project = await updateProject(
              req.body.title,
              req.body.subTitle,
              req.body.targetLaunchDate,
              req.body.fundingGoal,
              req.body.story,
              projId
    );
    return res.json({ project })
}


export const project_delete = async (req: Request, res: Response) => {
        const projId = parseInt(req.params.id, 10);
        await deleteProject(projId)
        return res.json({ projId })
    }
