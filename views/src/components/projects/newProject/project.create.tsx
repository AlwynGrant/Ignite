import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SessionContext from '../../../shared/context';


const ProjectPage = () => {
    const navigate = useNavigate()
    const context = useContext(SessionContext)

    return (
        <>
            <header className='top-container-project'>
                {/* <NavHome /> */}
            </header>

            <main className="bottom-featured-project">
                <div className='card-right-s'>
                    <span className='card-data-s'></span>
                    <span className='card-data-s'></span>
                    <span className='card-data-s'></span>
                    <span className='project-image'></span>
                    <span className='card-data-s'></span>
                    <span className='card-data-s'></span>
                    <span className='card-data-s'></span>
                    <span className='project-story'></span>
                    <button className='project-back-btn'>Submit</button>
                </div>
            </main>
        </>
    );
}

export default ProjectPage
