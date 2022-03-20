import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  { getOneProject } from '../../requests/project.request'
import SessionContext from '../../shared/context';
import { backProject } from '../../requests/backer.request';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './styles/backer.css'
import NavFeatured from '../home/subcomponents/featured.nav';

const BackerForm = () => {
    const navigate = useNavigate()
    const { projId } = useParams()
    const context = useContext(SessionContext)

    const [project, setProject] = useState<any>()
    const [amount, setAmount] = useState<string>('10.00')

    useEffect(() =>{
        (async () => {
            await getOneProject(projId)
            .then((res) => {
                setProject(res.project)
            })
        })()
    }, [context.id])

    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value)
    }

    const handleBacking = async () => {
        await backProject(
            window.sessionStorage.getItem('id'),
            projId,
            amount
            )
        .then(() => {
            navigate(`/project/${projId}`)
        })
    }

    return (
        <>
            <header className='top-container-project'>
                <NavFeatured />
            </header>

            <main className="backer-main">
                <section className='backer-section'>
                    <article className="backer-article">
                        <span className='backer-info-title'>{project?.title} <br /></span>
                        <div className='backer-info-line'>
                            <span className="card-data-b"> by {`${project?.User.firstName} ${project?.User.lastName}`} <br /></span>
                            <span className='card-data-b'>Target Launch Date {project?.targetLaunchDate} <br /></span>
                            <span className='card-data-b'>Current funding ${project?.fundingCurrent}.00 <br /></span>
                            <span className='card-data-b'>Current funding ${project?.fundingGoal}.00 <br /></span>
                        </div>
                    </article>
                </section>
                <form className='backer-form'>
                    <div className='inner-form-control'>
                        <FormControl>
                            <FormLabel id="radio-buttons-group-label">Select an amount to contribute</FormLabel>
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group-label"
                                    defaultValue={'10.00'}
                                    name="radio-buttons-group"
                                >
                                <FormControlLabel
                                    value="10.00"
                                    control={<Radio />}
                                    checked={amount === "10.00"}
                                    onChange={(e) => handleRadio(e as React.ChangeEvent<HTMLInputElement>)}
                                    label="$10.00"
                                    />
                                <FormControlLabel
                                    value="25.00"
                                    control={<Radio />}
                                    checked={amount === "25.00"}
                                    onChange={(e) => handleRadio(e as React.ChangeEvent<HTMLInputElement>)}
                                    label="$25.00"/>
                                <FormControlLabel
                                    value="50.00"
                                    control={<Radio />}
                                    checked={amount === "50.00"}
                                    onChange={(e) => handleRadio(e as React.ChangeEvent<HTMLInputElement>)}
                                    label="$50.00" />
                                <FormControlLabel
                                    value="100.00"
                                    control={<Radio />}
                                    checked={amount === "100.00"}
                                    onChange={(e) => handleRadio(e as React.ChangeEvent<HTMLInputElement>)}
                                    label="$100.00"/>
                                <input
                                    className='backer-custom-input'
                                    type='text'
                                    placeholder='test'
                                    value={amount}
                                    onChange={(e) => handleRadio(e)}
                                    ></input>
                                <button
                                    className='backer-btn'
                                    onClick={() => handleBacking()}>Submit</button>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </form>
            </main>
        </>
    );
}

export default BackerForm
