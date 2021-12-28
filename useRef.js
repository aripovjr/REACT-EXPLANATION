import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)
  const handlesubmit = e =>{
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }

  return <>
  <form className='form' onSubmit={handlesubmit}>
    <div>
      <input type='text' ref={refContainer}/>
      <button type='submit'>submit</button>
    </div>
  </form>
  <div ref={divContainer}>Hello world</div>
  </>;
};

export default UseRefBasics;
