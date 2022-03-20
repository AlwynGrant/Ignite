import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SessionContext from '../../../shared/context';
import { createProject } from '../../../requests/project.request';
import './styles/new.project.css'

const ProjectNew = () => {
    const navigate = useNavigate()
    const context = useContext(SessionContext)
    const [userId, setUserId] = useState(String(window.sessionStorage.getItem('id')))
    const [title,setTitle] = useState<string>('')
    const [subTitle,setSubTitle] = useState<string>('')
    const [category,setCategory] = useState<string>('')
    const [image,setImage] = useState<string>('')
    const [targetLaunchDate,setTargetLaunchDate] = useState<string>('')
    const [fundingGoal,setFundingGoal] = useState<string>("")
    const [story,setStory] = useState<string>('')
    const [errors,setErrors] = useState<string>('')

    const categories = [
        "Art",
        "Collectables",
        "Consumables",
        "Digital Media",
        "Games",
        "Health-care",
        "Pet Products",
        "Toys",
        "Technology",
        "Other"
    ]

    const handleCreation = async () => {
        const user = {
            userId,
            title,
            subTitle,
            category,
            image,
            targetLaunchDate,
            fundingGoal,
            story
        }
        await createProject(user)
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <>
            <header className='top-container-project'>
                {/* <NavHome /> */}
            </header>

            <main className="main-new">
                <form className='project-new-form'>
                    <input
                        className='new-project-input'
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        />
                    <input
                        className='new-project-input'
                        placeholder='Sub Title'
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                        type="text"
                        />
                    <input
                        className='new-project-input'
                        placeholder='Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="select"
                        />
                    <input
                        className='new-project-input'
                        placeholder='Image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        />
                    <input
                        className='new-project-input'
                        placeholder=''
                        value={targetLaunchDate}
                        onChange={(e => setTargetLaunchDate(e.target.value))}
                        type="month"
                        />
                    <input
                        className='new-project-input'
                        placeholder='Funding Goal'
                        value={fundingGoal}
                        onChange={(e) => setFundingGoal(e.target.value)}
                        type="number"
                        />
                    <textarea
                        className='new-project-input'
                        placeholder='Write your project idea here....'
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        rows={50}
                        cols={100}
                        />
                    <button
                        className='new-project-btn'
                        onClick={() => handleCreation()}
                    >Submit</button>
                </form>
            </main>
        </>
    );
}

export default ProjectNew
