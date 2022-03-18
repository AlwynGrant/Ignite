import React, { FC, useContext } from 'react'
import SessionContext from '../../shared/context'
import './styles/home.css'

const Home: FC = () => {
    const context = useContext(SessionContext)

    return (
           <h1>TEST</h1>

    )
}

export default Home
