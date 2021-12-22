//here i'm just code the part where it is used useState() in react
//useState is a Hook allows us to track state in a function

import React from 'react';
import { data } from '../../../data';
//packages i had in my laptop but did not uploaded them 

const UseStateArray = () => {
  
  const [people, setPeople] = React.useState(data)//destructuring 
  //people array is a current state
  //setPeople() is the function that is used to update our state

  //array function with 'id' argument to delete items from list when button is clicked
  const removeItems = id =>{
    //filter method helps to filter (lol) 
    const newPeople = people.filter(person=> person.id !== id)
    setPeople(newPeople)
    //we pass our new array to state function
  }

  return (
    <>{
      people.map(person=>{
        const {id, name} = person//destructuring
        return(
          <div className='item' key={id}>//key helps us to identify which item should be deleted 
            <h4>{name}</h4>
            <button onClick={()=> removeItems(id)}>Remove</button>
            //onClick is event here, and it calls removeItem() function with id which is a key (identifies which item should be deleted)
          </div>
        )
      })
    }
    <button className='btn' onClick={()=> setPeople([])}>Clear All</button>
    //here click calls our state function with empty array
    </>
  )
};

export default UseStateArray;
