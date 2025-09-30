import React from 'react'

function RegisterScreen() {
  let handleClick=(e)=>{
     e.preventDefault();  // Do not Reload the screen on calling this function
    console.log("Hello World!");
    
  }
  let age = 19;
  let email ="pankajyadav123@gmail.com";
  
  
  return (
    <div>
      <form>
        {age> 18 && email === "pankajyadav123@gmail.com" ? (
        <div>
        <input type="email" placeholder='enter Email' />
        <button onClick={handleClick}>Submit</button>
        </div>
        ): (<h1>You are not 18 , come after 18!</h1>)}
          
        </form>
    </div>
    
  )
}

export default RegisterScreen;


// conditional Rendering