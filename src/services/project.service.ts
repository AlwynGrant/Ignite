
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
          const project = await db.Project.findByPk(id)
          await project.update({
              title,
              subTitle,
              targetLaunchDate,
              fundingGoal,
              story
          });
          return project
  };

  export const deleteProject = async function (id: number) {
          const project = await db.Project.findByPk(id)
          await project.destroy()
          return
  };
