import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SessionContext from '../../../shared/context';
import  { getAllProjects } from '../../../requests/project.request'
import './styles/discover.css'

const Discover = () => {
    const navigate = useNavigate()
    const context = useContext(SessionContext)
    const [projects, setProjects] = useState<string[] | number[]>([])

    useEffect(() =>{
        (async () => {
            await getAllProjects()
                .then((res) => {
                    setProjects(res.projectList)
                })
        })()
    }, [])


    const handleClick = (i: number) => {
        navigate(`/project/${i}`)
    }

    return (
        <>
            <header className='top-container-discover'>
                {/* <NavHome /> */}
                <div className='featured-main-text'>IGNITE</div>
            </header>

            <main className="bottom-featured-discover">
                <p>Live projects</p>
                <section className='card-container-discover'>
                    {
                        Object.values(projects)?.map((project, i) => {
                            return (
                                <div
                                    key={i}
                                    className='discover-card'
                                    onClick={() => handleClick(project.id)}
                                >
                                    <div className='card-top'>
                                        <img src={project.image}/>
                                    </div>
                                    <div className='card-bottom'>
                                        <span className='card-data'><p>Title:</p> {project.title} <br /></span>
                                        <span className='card-data'><p>Sub-title:</p> {project.subTitle} <br /></span>
                                        <span className='card-data'><p>Anticipated Launch Date:</p> {project.targetLaunchDate} <br /></span>
                                        <span className='card-data'><p>Category:</p> {project.category} <br /></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </main>
        </>
    );
}

export default Discover
