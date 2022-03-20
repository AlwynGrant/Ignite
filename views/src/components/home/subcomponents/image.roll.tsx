import React, { FC, useContext } from 'react'
import '../styles/image.roll.css'
import extrep1 from '../images/entrep1.jpg'
import extrep2 from '../images/entrep2.jpg'
import prod1 from '../images/prod1.jpg'
import prod2 from '../images/prod2.jpg'

const ImageRoll: FC = () => {

    const imageArray: string[] = [
        extrep1,
        prod1,
        extrep2,
        prod2
    ]

    const altTextArray: string[] = [
        "A successful young woman holding an ipad, heading her business team.",
        "An anonymous person pouring glowing water into a cup.",
        "Two young team members enjoying lunch, and sharing their sucesses.",
        "A bundle of cream-colored skin care products."
    ]

    return (
        <div className='image-card'>
                {
                    imageArray.map((url, i) => {
                        return <img key={i} className={`splash-i image-${i}`} src={url} alt={altTextArray[i]} />
                    })
                }
        </div>
    );
}

export default ImageRoll
