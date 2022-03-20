interface Project {
    userId: string;
    title: string;
    subTitle: string;
    category: string;
    image: string;
    targetLaunchDate: string;
    fundingGoal: string;
    story: string;
}
interface EditProject {
    projId: string;
    title: string;
    subTitle: string;
    category: string;
    image: string;
    targetLaunchDate: string;
    story: string;
}

export const getAllProjects = async () => {
    const response = await fetch("http://localhost:5000/api/project/all", {
        method: "GET",
        headers: {
            'Content-Type':'application/json',
        },

    });

    const data = await response.json();

    return data;
}

export const getOneProject = async (id: string | undefined) => {
    const response = await fetch(`http://localhost:5000/api/project/${id}`, {
        method: "GET",
        headers: {
            'Content-Type':'application/json',
        },
    });

    const data = await response.json();

    return data;
}

export const createProject = async (project: Project) => {
    const { userId, title, subTitle, category, image, targetLaunchDate , fundingGoal, story } = project
    const response = await fetch(`http://localhost:5000/api/project/new`, {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            userId,
            title,
            category,
            subTitle,
            image,
            targetLaunchDate,
            fundingGoal,
            story
        }),
    });

    const data = await response.json();

    return data;
}

export const editProject = async (project: EditProject) => {
    const { projId, title, subTitle, category, image, targetLaunchDate, story } = project
    const response = await fetch(`http://localhost:5000/api/project/${projId}/edit`, {
        method: "PATCH",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            projId,
            title,
            category,
            subTitle,
            image,
            targetLaunchDate,
            story
        }),
    });

    const data = await response.json();

    return data;
}


export const deleteProject = async (projId:string) => {
    const response = await fetch(`http://localhost:5000/api/project/${projId}/delete`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}
