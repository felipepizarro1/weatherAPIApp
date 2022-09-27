import React from 'react'
import { useState } from 'react';

export default function Headerunit() {

    const [isHovering, setIsHovering] = useState(false);

    function hover () {
        setIsHovering((pisHovering)=>
            pisHovering = true
        )
    }

    function notHover (){
        setIsHovering((pisHovering)=>
            pisHovering = false
        )
    }
  return (
    <>
        <button onMouseOver={hover} onMouseLeave={notHover}  class="fa fa-thermometer-full btn btn-outline-light  mb-1 mr-0 text-center "></button>
        {isHovering ? <span> Celsius or Fahrenheit</span> : null}
        <div class="text-center">
            <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png"></img>
        </div>
    </>
    
  )
}
