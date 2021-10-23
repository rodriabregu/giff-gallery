import React, { useState, useEffect } from 'react';
import getGifs from './services/getGifs';
import './App.css';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyWord: 'morty' }).then( gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(e => <img src={e} />)
        }
      </section>
    </div>
  );
}

export default App;
