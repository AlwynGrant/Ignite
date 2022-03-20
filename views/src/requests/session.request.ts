
interface BodyData {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
}

export const signUp = async (user: BodyData ) => {
    const { email, firstName, lastName, password } = user;

    const response = await fetch("http://localhost:5000/api/session/signup", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            email,
            firstName,
            lastName,
            password,
        }),
    });

    const data = await response.json();

    return data;
}

export const logIn = async (user: BodyData ) => {
    const { email, password } = user;

    const response = await fetch("http://localhost:5000/api/session/login", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();

    return data;
}
