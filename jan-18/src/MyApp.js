import { Button } from "@mui/material"
import { useState } from "react"
import GadgetShow from "./GadgetShow"

const getRandomGadget = () => {
    const gadgets = ['laptop', 'phone', 'watch', 'ipad', 'e-bike', 'tablet']
    return gadgets[Math.floor(Math.random() * gadgets.length)]
}

function App() {
    const [count, setCount] = useState(0)
    const [gadgets, setGadgets] = useState([])
    const gadgetsForRendering = gadgets.map((gadget, index) => {
        return <GadgetShow type={gadget} key={index} />
    })
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
        setGadgets([...gadgets, getRandomGadget()])
    }
    return (<div className='App'>
        <h1>{count}</h1>
        {gadgetsForRendering}
        <Button variant="contained" onClick={handleClick}>Generate</Button>
    </div>)
}

export default App