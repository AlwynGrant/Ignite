import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SessionContext from '../../../shared/context';
import  { getOneProject } from '../../../requests/project.request'
import BackerForm from '../../backers/backer';
import RadioButtons from '@mui/material'
import './styles/project.css'

const ProjectPage = () => {
    const navigate = useNavigate()
    const { projId } = useParams()
    const context = useContext(SessionContext)
    const [project, setProject] = useState<any>()

    useEffect(() =>{
        (async () => {
            await getOneProject(projId)
                .then((res) => {
                    setProject(res.project)
                })
        })()
    }, [])

    const handleBacker = () => {
        navigate(`/project/${projId}/back-project`)
    }

    return (
        <>
            <header className='top-container-project'>
                {/* <NavHome /> */}
            </header>

            <main className="bottom-featured-project">
                <section className='card-container-project'>
                    <div className='project-card'>
                        <div className='card-left-s'>
                            <img className='project-image' src={project?.image}/>
                            <div className='project-under-image'>
                                <span className='card-data-s'><p>Created by:</p> {`${project?.User. firstName} ${project?.User.lastName}`} <br /></span>
                                <span className='card-data-s'><p>Funding started on</p> <br /></span>
                            </div>
                        </div>
                        <div className='card-right-s'>
                            <span className='card-data-s'><p>Title:</p> {project?.title} <br /></span>
                            <span className='card-data-s'><p>Sub-title:</p> {project?.subTitle} <br /></span>
                            <span className='card-data-s'><p>Category:</p> {project?.category} <br /></span>
                            <span className='card-data-s'><p>Anticipated Launch Date:</p> {project?.targetLaunchDate} <br /></span>
                            <span className='card-data-s'><p>Current funding</p> ${project?.fundingCurrent}.00 <br /></span>
                            <span className='card-data-s'><p>Current funding</p> ${project?.fundingGoal}.00 <br /></span>
                            <button className='project-back-btn' onClick={() => handleBacker()}>Contribute</button>
                            <div className='project-story'>
                                <span className='card-data-story'>
                                    <p>Story</p> <br />
                                    {project?.story} <br />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProjectPage
