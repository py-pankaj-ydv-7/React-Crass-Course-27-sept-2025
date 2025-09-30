import React from 'react'

// code optimization tips

//1. Props - Object 

const Title = ({name, ContactNumber, schoolName, collegeName, rollNo}) => {
  return (
    <>
    {/* <h1>this is about screen</h1>     */}
    <h2 style={{fontSize:60, color:"red"}} >{name}</h2> {/* whenever we get a name from the screen, we can pass it intio the component over here!  */}
    <h2 style={{fontSize:60, color:"red"}} >{name}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{ContactNumber}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{schoolName}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{collegeName}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{rollNo}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{name}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{name}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{name}</h2> 
    <h2 style={{fontSize:60, color:"red"}} >{name}</h2> 
    
    
    </>
  )
}

export default Title;