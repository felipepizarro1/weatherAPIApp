import React from 'react'

export default function Searchbar() {
  return (
    <div class="row px-3">                          
        <input type="text" name="location" placeholder="Another location" class="mb-5 text-capitalize"></input>
        <div class="fa fa-search mb-5 mr-0 text-center"></div> 
    </div>
  )
}
