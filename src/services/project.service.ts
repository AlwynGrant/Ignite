
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
        title: string,
        category: string,
        subTitle: string,
        image: string,
        targetLaunchDate: string,
        fundingCurrent: number,
        fundingGoal: number,
        story: string
  ) {
      try {
          const newProject = await db.Project.build({
              title,
              category,
              subTitle,
              image,
              targetLaunchDate,
              fundingCurrent,
              fundingGoal,
              story
          });
          await newProject.save();
        //   TODO: RETURN SOMETHING HERE: PREFERABLLY NEW OBJECT/OBJECT ID
      } catch (error) {
         return (error as Error).message
      }
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
