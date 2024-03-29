import { Route, Routes } from 'react-router-dom'
import About from './About'
import './App.css'
import Home from './Home'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
