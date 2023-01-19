import { useState } from 'react'
import ebike from './images/e-bike.jpg'
import heart from './images/heart.png'
import ipad from './images/ipad.jpg'
import laptop from './images/laptop.jpg'
import phone from './images/phone.jpg'
import tablet from './images/tablet.jpg'
import watch from './images/watch.jpg'

import './GadgetShow.css'

const image = {
    laptop: laptop,
    phone: phone,
    tablet: tablet,
    'e-bike': ebike,
    ipad: ipad,
    watch: watch
}

function GadgetShow(props) {
    const [likes, setLikes] = useState(0)
    const { type } = props
    const handleClick = () => {
        setLikes(prevLikes => prevLikes + 1)
    }
    return (<div onClick={handleClick} className="gadget-container">
        <div><img src={image[type]} alt={type} className='gadget' /></div>
        <div><img src={heart} alt='heart' style={{ width: 30 + 10 * likes + 'px' }} className='heart' /></div>
        <h2>{type.toUpperCase()}: {likes} num of likes</h2>
    </div>)
}

export default GadgetShow