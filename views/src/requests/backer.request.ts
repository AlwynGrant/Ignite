type Backer = string | null | undefined

export const backProject = async (userId: Backer, projId: Backer, amount: Backer) => {
    const response = await fetch(`http://localhost:5000/api/backer/${projId}/back`, {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            amount,
            userId
        }),
    });

    const data = await response.json();

    return data;
}
