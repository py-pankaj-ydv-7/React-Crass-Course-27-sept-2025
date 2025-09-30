import React from 'react'

function RegisterScreen() {
  let handleClick=(e)=>{
     e.preventDefault();  // Do not Reload the screen on calling this function
    console.log("Hello World!");
    
  }
  return (
    <div>
      <form>
        
        <input type="email" placeholder='enter Email' />
        <button onClick={handleClick}>Submit</button>
        </form>
    </div>
    
  )
}

export default RegisterScreen;