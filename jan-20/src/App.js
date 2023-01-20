import { Container } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Image from './Image';
const App = () => {
  const [images, setImages] = useState([])
  let url = 'https://api.unsplash.com/search/photos'
  const handleKeyDown = async (event) => {
    console.log(event.keyCode)
    console.log(event.target.value)
    if (event.keyCode === 13) {
      const func = async () => {
        let response = await axios.get(url, {
          headers: {
            Authorization: `Client-ID qqPwXhtWMb7l3NtWW65He3qYUmA0okyXm7tTuks0rB4`
          }, params: {
            query: event.target.value
          }
        })
        return response
      }
      let r = await func()

      console.log(r.data.results)
      setImages([...r.data.results])
    }
  }
  console.log(images)
  return (
    <div className="App">
      <Container className='search-area'>
        <label htmlFor="search">search here</label>
        <br />
        <input type="text" id="search" onKeyDown={handleKeyDown} />
      </Container>
      <Container>
        {images && images.map((a, i) => {
          return (<Image link={a.urls.small} key={i} />)
        })}
      </Container>

    </div>
  );
}

export default App;
