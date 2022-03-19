import React, { FC } from 'react'
import '../styles/text.roll.css'

const TextRoll: FC = () => {

    const arrayWords:string[] = [
         "Become an entrepreneur.",
         "Back the next big idea.",
     ]

    return (
        <article className='splash-sub-text'>
            {
                arrayWords.map((string, i) => {
                    return <div key={i} className={`string-${i}`}>{string}</div>
                })
            }
        </article>
    );
}

export default TextRoll
