import { createContext, useContext, useState} from 'react';

interface Session {
    userId: number;
    firstName: string;
    lastName: string;
}

const SessionContext = createContext<Session | null>(null)


export default SessionContext
