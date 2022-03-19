import React, { FC, useEffect, useContext } from 'react'
import SessionContext from '../../shared/context'
import TextRoll from './subcomponents/text.roll'
import ImageRoll from './subcomponents/image.roll'
import NavHome from './subcomponents/home.nav'
import './styles/home.css'

const Home = () => {
    const context = useContext(SessionContext)
    console.log(context)
    context.id = 2
    console.log(context)

    return (
        <>
            <header className='top-container'>
                <NavHome />
                <div className='splash-main-text'>IGNITE</div>
                <TextRoll />
            </header>

            <main className="splash-container">
                <section className='bottom-container'>
                    <ImageRoll />
                </section>
            </main>
        </>
    );
}

export default Home
