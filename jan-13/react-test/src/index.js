import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <label>Test</label>
            <input type="text" />
        </div>
    )
}

root.render(<App />)