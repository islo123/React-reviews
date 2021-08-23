import React, { useState } from 'react';
import people from "./data"

const Review = function (){
  const [person, setPerson] = useState(people)
  const [value, setValue] = useState(0)
    
  const prev = function (){
      return setValue(function (index){
        return checkNumber(index + 1)
      })
    }

  const next = function (){
    return setValue(checkNumber(value + 1))
  }

  const checkNumber = function (number){
    if(number < 0){
      return people.length - 1
    }
    if(number > people.length - 1){
      return 0
    }return number
  }
  const randomNumber= function (){
      let random = Math.floor(Math.random()* people.length)
      if(random === value)
      {
        random = value + 1
      }
      return setValue(checkNumber(random))
  }
  
  const {image, name} = person[value]
  return (
    <div>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <button onClick={randomNumber} >Random</button>
    </div>
  )
}

export default Review
