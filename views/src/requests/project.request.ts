interface User {
    userId: string;
    title: string;
    subTitle: string;
    category: string;
    image: string;
    targetLaunchDate: string;
    fundingGoal: string;
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

export const createProject = async (user: User) => {
    const { userId, title, subTitle, category, image, targetLaunchDate , fundingGoal, story } = user
    const response = await fetch(`http://localhost:5000/api/project/new`, {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            userId,
            title,
            subTitle,
            category,
            image,
            targetLaunchDate,
            fundingGoal,
            story
        }),
    });

    const data = await response.json();

    return data;
}
