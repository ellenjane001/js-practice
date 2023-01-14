import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App() {
    let message = 'hello there'
    if (Math.random() > 0.5)
        message = 'good bye'
    let inputType = 'number'
    let minValue = 5
    return (
        <div>
            <h1>Hello World</h1>
            <h1>{message}</h1>
            <p>{5 + 3}</p>
            <hr />
            <div>
                <input type={inputType} min={minValue} />
                <input type="number" min={3} />
            </div>
            <p>
                <input type="number" min={3} max={10} list={[9, 8, 7]} style={{ color: 'red', borderColor: "pink" }} alt={message} />
            </p>
        </div>
    )
}

root.render(<App />)