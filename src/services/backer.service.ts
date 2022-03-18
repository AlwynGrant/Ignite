
import db from '../../models'


  export const queryProjectToBack = async function(
      userId: number,
      projectId: number,
      backAmount: number
      ) {
        const project = await db.Project.findByPk(projectId);
        await db.Backer.create({
            UserId: userId,
            ProjectId: projectId,
            contributeAmount: backAmount
        })
        return project
  };
