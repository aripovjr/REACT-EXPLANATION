import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  //const firstValue = text || 'hello world 1';
//const secondValue = text && 'hello world 2';

  return <>
  {//<h1>first: {firstValue}</h1>
  //<h1>second: {secondValue}</h1>
  }
  <h1>{text || 'Aripov'}</h1>
  <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
  
  {isError && <h1>Error...</h1>}
  {isError ? <p>There is an error</p> : <div> <h1>there is no error</h1> </div>}

</>
};

export default ShortCircuit;
