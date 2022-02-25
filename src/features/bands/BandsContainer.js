import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import BandInput from './BandInput' //write the BandInput component as a child of BandsController
import { bandAdded } from './bandsSlice'

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities)
  const dispatch = useDispatch() //Dispatched action required to initiate this update should be set up in BandsContainer and passed down as a prop onBandSubmit to BandInput

  function handleBandSubmit(name) {
    dispatch(bandAdded(name)) /* The dispatched action required to initiate this update is set up and passed down as the prop onBandSubmit to BandInput */
  }
 
 return (
   <div>
     <BandInput onBandSubmit={handleBandSubmit} /> 
     <ul>
       {bands.map((band, i) => (
         <li key={i}> {band} </li>
       ))}
     </ul>
   </div>
 )
}
 
export default BandsContainer;