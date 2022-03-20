import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SessionContext from '../../../shared/context';
import { createProject } from '../../../requests/project.request';
import './styles/new.project.css'
import { SelectUI } from './sub-components/select.material';
import { Dispatch, SetStateAction } from "react";

interface Drill {
  getter: string;
  setter: Dispatch<SetStateAction<string>>;
}

const ProjectNew = () => {
    type State = File | undefined | string

    const navigate = useNavigate()
    const context = useContext(SessionContext)
    const [userId, setUserId] = useState(String(window.sessionStorage.getItem('id')))
    const [title,setTitle] = useState<string>('')
    const [subTitle,setSubTitle] = useState<string>('')
    const [category,setCategory] = useState<string>('')
    const [targetLaunchDate,setTargetLaunchDate] = useState<string>('')
    const [fundingGoal,setFundingGoal] = useState<string>("")
    const [story,setStory] = useState<string>('')
    const [image, setImage] = useState<string>("");
    const [errors,setErrors] = useState<string>('')

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
                <h2 className='new-header'>Bring an idea to life!</h2>
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
                        placeholder='Image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="input"
                        />
                    <SelectUI
                        category={category}
                        setCategory={setCategory}
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
                    <button
                        className='new-project-btn'
                        onClick={() => handleCreation()}
                    >Submit</button>
                </form>
                    <textarea
                        className='new-project-tarea'
                        placeholder='Write your project story here.... Where did it begin? Where is it going?'
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        rows={25}
                        cols={50}
                        />
            </main>
        </>
    );
}

export default ProjectNew
