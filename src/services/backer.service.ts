
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


    export const updateFundingByBackerAmount = async function (
        backAmount: number,
        id: number,
  ) {
      try {
          const project = await db.Project.findByPk(id)
          const newTotal = project.fundingCurrent + backAmount
          const updatedProject = await project.update({
            fundingCurrent: newTotal
          });
          return updatedProject
      } catch (error) {
         return (error as Error).message
      }
  };
