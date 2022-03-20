
import db from '../../models'


  export const queryOneProject = async function(id: number) {
        const project = await db.Project.findByPk(id, {
            include: db.User
        });
        return project
  };

  export const queryAllProjects = async function () {
        const projects = await db.Project.findAll();
        return projects
  };

  export const createNewProject = async function (
        userId: string,
        title: string,
        category: string,
        subTitle: string,
        image: string,
        targetLaunchDate: string,
        fundingGoal: string,
        story: string
  ) {
      const fundingNum = parseInt(fundingGoal, 10);
      const userNum = parseInt(userId, 10);
      console.log(userNum)
          const newProject = await db.Project.create({
              userId: userNum,
              title,
              category,
              subTitle,
              image,
              targetLaunchDate,
              fundingCurrent: 0,
              fundingGoal: fundingNum,
              story
          });
        return newProject
  };

  export const updateProject = async function (
        title: string,
        subTitle: string,
        targetLaunchDate: string,
        fundingGoal: number,
        story: string,
        id: number,
  ) {
      try {
          const project = db.Project.findByPk(id)
          await project.update({
              title,
              subTitle,
              targetLaunchDate,
              fundingGoal,
              story
          });
          return project
      } catch (error) {
         return (error as Error).message
      }
  };

  export const deleteProject = async function (id: number) {
      try {
          const project = db.Project.findByPk(id)
          await project.destory()
          return project
      } catch (error) {
         return (error as Error).message
      }
  };
