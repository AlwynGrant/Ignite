import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SessionContext from '../../shared/context'
import prod1 from './images/prod1.jpg'
import './styles/featured.css'
import NavFeatured from './subcomponents/featured.nav'

const Featured = () => {
    const navigate = useNavigate()
    const context = useContext(SessionContext)

    const handleDiscover = () => {
        navigate('/discover');
    }

    const handleNewProject = () => {
        navigate('/project/new');
    }

    return (
        <>
            <header className='top-container-featured'>
                <NavFeatured />
                <div className='featured-main-text'>IGNITE</div>
            </header>

            <main className="bottom-featured-container">
                <section className='featured-left-container'>
                    <p>Featured Project - H2Gl0W</p>
                    <img src={prod1} alt={'null'} />
                </section>
                <section className='featured-right-container'>
                    <p className='featured-intro'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quibusdam, quod quidem ipsa in distinctio fuga iste rerum laboriosam animi excepturi at vero voluptate a natus nihil autem impedit incidunt!</p>
                    <button className='featured-button' onClick={() => handleDiscover()}>Discover</button>
                    <button className='featured-button' onClick={() => handleNewProject()}>Ignite a project</button>
                </section>
            </main>
        </>
    );
}

export default Featured
