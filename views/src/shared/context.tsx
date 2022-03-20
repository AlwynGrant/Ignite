import { createContext, useContext, useState} from 'react';

type SessionInputs = string | null

export interface Session {
    id: SessionInputs;
    email: SessionInputs;
    firstName: SessionInputs;
    lastName: SessionInputs;
}

const defaultState: Session = {
    id: "",
    email: "",
    firstName: "",
    lastName: ""
}

const SessionContext = createContext<Session>(defaultState)


export default SessionContext
