import { createContext, useContext, useState} from 'react';

export interface Session {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

const defaultState: Session = {
    id: 0,
    email: "",
    firstName: "",
    lastName: ""
}

const SessionContext = createContext<Session>(defaultState)


export default SessionContext
