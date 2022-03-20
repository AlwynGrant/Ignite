

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

export const getOneProject = async (id: number ) => {
    const response = await fetch(`http://localhost:5000/api/project/${id}`, {
        method: "GET",
        headers: {
            'Content-Type':'application/json',
        },
    });

    const data = await response.json();

    return data;
}
