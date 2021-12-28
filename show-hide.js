import React, { useState, useEffect } from 'react';

const ShowHide = () => {
 const [show, setShow] = useState(false)
 return <>
    <button className='btn' onClick={()=>{setShow(!show)}}>show and hide</button>
    {show && <Item/>}
    </>
};

const Item = () =>{
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log('not yet')
    window.addEventListener('resize', checkSize)
    return()=>{//clean up
      console.log('delete')
      window.removeEventListener('resize', checkSize)
    }
  },[])

  return(
    <div style={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h2>size: {size} px</h2>
    </div>
  )

}

export default ShowHide;
