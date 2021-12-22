import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'I am Spider-Man'})
  
    const changeMessage = () =>{
      let change = 'I am Peter Parker'
      if(person.message !== change){
        setPerson({...person, message: change}) 
      }else{
        setPerson({...person, message: 'I am Spider-Man'})
        //look here we are using spread operstion
      }
      }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change message</button>
    </>
  )
};

export default UseStateObject;
