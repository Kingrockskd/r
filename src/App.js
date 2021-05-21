import React, { useEffect, useState } from 'react';
import './App.css';
import Output from './components/Output'

function App() {
  const appId = "3485af7b"
  const appKey = "4181f78703f7a7f6fb13340282221dd4"

  const [input, setInput] = useState('')
  const [query, setQuery] = useState('chocolate')
  const [result, setResult] = useState([])

  const reSearch = (e) => {
    e.preventDefault();
    setQuery(input)
    setInput('')
  }

  useEffect(async () => {
    try {
      const r = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
      const re = await r.json();
      setResult(re.hits)
   }
    catch (er) {
      console.log(er)
    }
  }, [query]);
  console.log(result)
  return (
    <div ><div className='head'>
<h2>HEllo KD</h2>
      <div className='nav'>
      <input type='text' placeholder='Type your faourite dish...' onChange={(e) => setInput(e.target.value)} value={input}></input>
      <button onClick={reSearch}>search now!</button>
      </div>
    </div>
      <div className='bodyl'>
      { result.map((ob_e)=><Output recipe={ob_e.recipe}/>)
      } 
    </div></div>
  );
}

export default App;
