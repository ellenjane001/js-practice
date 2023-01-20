import React from 'react'
import './Image.css'

const Image = (props) => {
    const { link } = props
    return (
        <div className='image'>
            <img src={link} alt="unsplash" />
        </div>
    )
}

export default Image