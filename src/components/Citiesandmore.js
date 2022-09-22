import React from 'react'

export default function Citiesandmore() {
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
  )
}
