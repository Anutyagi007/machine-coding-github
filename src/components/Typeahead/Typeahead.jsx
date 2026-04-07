import React, { useEffect, useRef, useState } from 'react'

const Typeahead = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const cache = useRef({});
  useEffect(() => {
    const abortController = new AbortController();
    const {signal} = abortController;
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/products/search?q=${input}`);
      const json = await data.json();
      console.log(json.products);
      cache.current[input] = json.products;
      setSuggestions(json.products);
      
    }
    let timeout;
    if(cache.current[input]) {
      setSuggestions(cache.current[input]);
    }
    else {
      timeout = setTimeout(()=> {
      fetchData();
    }, 300);
    }
    return () => {
      clearTimeout(timeout);
      abortController.abort();
    }
  }, [input]);
  console.log(cache);
  return (
    <div>
      <h2>
        Typeahead Component
      </h2>
      <div>
        <input style={{width: '300px'}} type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <ul>
          {
            suggestions.map((text)=> {
              return(
                <li key={text.id}>{text.title}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Typeahead;