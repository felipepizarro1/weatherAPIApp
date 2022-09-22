import React from 'react';
import { useState } from 'react';

export default function Userinterface() {

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

    const cities = [
        {
            id:1,
            name: "Roma",
        },
        {
            id:2,
            name: "Paris",
        },
        {
            id:3,
            name: "Milano",
        },
        {
            id:4,
            name: "Madrid",
        },
    ]

  return (
            <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="row card0">
                        <div class="card1 col-lg-8 col-md-7">

                            <button onMouseOver={hover} onMouseLeave={notHover} class="fa fa-thermometer-full mb-1 mr-0 text-center "></button>
                            {isHovering ? <span> Celsius or Fahrenheit</span> : null}
                            <div class="text-center">
                                <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png"></img>
                            </div>
                            <div class="row px-3 mt-3 mb-3">
                                <h1 class="large-font mr-3">26&#176;</h1>
                                <div class="d-flex flex-column mr-3">
                                    <h2 class="mt-3 mb-0">London</h2>
                                    <small>10:36 - Tuesday, 22 Oct '19</small>
                                </div>
                                <div class="d-flex flex-column text-center">
                                    <h3 class="fa fa-sun-o mt-4"></h3>
                                    <small>Sunny</small>
                                </div>
                                
                            </div>
                            <div class="row px-3 mt-3 mb-3">
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                <div class="d-flex flex-column text-center mx-4">
                                    <small>10:30 </small>
                                    <h3 class="fa fa-sun-o mt-2"></h3>
                                    <small>26&#176;</small>
                                </div>
                                
                            </div>
                        </div>
                        <div class="card2 col-lg-4 col-md-5">
                            {/*Aquí abajo: Row de search bar */}
                            <div class="row px-3">
                                
                                <input type="text" name="location" placeholder="Another location" class="mb-5 text-capitalize"></input>
                                <div class="fa fa-search mb-5 mr-0 text-center"></div>
                                
                                
                            </div>
                            {/*Aquí abajo: Mapeo de const cities */}
                            <div class="mr-5">
                                {cities.map((city)=>(
                                    <p key={city.id} class="light-text suggestion">{city.name}</p>
                                ))}
                                


                                <div class="line my-5"></div>

                                <p>Weather Details</p>
                                <div class="row px-3">
                                    <p class="light-text">Cloudy</p>
                                    <p class="ml-auto">12%</p>
                                </div>
                                <div class="row px-3">
                                    <p class="light-text">Humidity</p>
                                    <p class="ml-auto">78%</p>
                                </div>
                                <div class="row px-3">
                                    <p class="light-text">Wind</p>
                                    <p class="ml-auto">1km/h</p>
                                </div>
                                <div class="row px-3">
                                    <p class="light-text">Rain</p>
                                    <p class="ml-auto">0mm</p>
                                </div>

                                <div class="line mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
