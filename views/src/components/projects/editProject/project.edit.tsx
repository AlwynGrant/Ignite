import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProject, getOneProject } from '../../../requests/project.request';
import NavFeatured from '../../home/subcomponents/featured.nav';
import { SelectUI } from '../newProject/sub-components/select.material';

const ProjectEdit = () => {
    const  params = useParams()
    const trueStr = String(params.projId)
    const navigate = useNavigate()
    const [title,setTitle] = useState<string>('')
    const [subTitle,setSubTitle] = useState<string>('')
    const [category,setCategory] = useState<string>('')
    const [targetLaunchDate,setTargetLaunchDate] = useState<string>('')
    const [story,setStory] = useState<string>('')
    const [image, setImage] = useState<string>("");
    const [errors,setErrors] = useState<string>('')

    const handleEdit = async () => {
        const user = {
            projId: trueStr,
            title,
            subTitle,
            category,
            image,
            targetLaunchDate,
            story
        }
        await editProject(user)
            .then((data) => {
                navigate(`/project/${trueStr}`)
            })
    }

    useEffect(() =>{
        (async () => {
            await getOneProject(trueStr)
                .then((res) => {
                    const project = res?.project
                    setTitle(project?.title)
                    setSubTitle(project?.subTitle)
                    setImage(project?.image)
                    setCategory(project?.category)
                    setTargetLaunchDate(project?.targetLaunchDate)
                    setStory(project?.story)
                })
        })()
    }, [])

    return (
        <>
            <header className='top-container-project'>
                <NavFeatured />
                <h2 className='new-header'>Need a change? Update here.</h2>
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
                    <button
                        className='new-project-btn'
                        onClick={() => handleEdit()}
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

export default ProjectEdit
