import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Advice = () => {
  const [advice, setAdvice] = useState('');

  // Define fetchAdvice outside of useEffect so it can be reused
  const fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice); 
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleAdvice = () => {
    fetchAdvice();  // This can now call fetchAdvice directly
  }

  return (
    <div className="app">
        <div className='card'>
            <h1 className='heading'>{advice || "Loading advice..."}</h1>
            <button onClick={handleAdvice}>
                <span>GIVE ME ADVICE</span>
            </button>
        </div>
    </div>
  );
}

export default Advice;
