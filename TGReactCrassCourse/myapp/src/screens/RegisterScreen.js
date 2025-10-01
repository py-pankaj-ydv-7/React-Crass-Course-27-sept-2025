import React, { useEffect, useState } from 'react'

function RegisterScreen() {
  // Hooks
  //useState()

  const [email,setEmail]=useState();// hooks - manage state
  const [password,setPassword]=useState();// hooks - manage state
  const [age,setAge]=useState(13);// hooks - manage state

 
    

  let handleClick=(e)=>{
    e.preventDefault();  // Do not Reload the screen on calling this function
    console.log("jitu bhai kaam kr rah hai button tum chinta mat!");
  }
   
    function increaseAge(e){
      e.preventDefault();
    setAge(age+1);
   }
  // console.log(email);
  // console.log(password);
  // setAge(13);// useEffect - it runs on the screen render

  useEffect(()=>{
    // setAge(13);
    
    
    console.log("age: ",age);
    
  },[age]); // Dependency array - we provide this with state variables, or any vaiables that are changing in nature, hit a re - render
  // runs whenever 'age' changes
  
  // let age = 19;
  // let email ="pankajyadav123@gmail.com";
  
  
  return (
    // if the user is above 18 and email is
    // <div>
    //   <form>
    //     {age> 18 && email === "pankajyadav123@gmail.com" ? (
    //     <div>
    //     <input type="email" placeholder='enter Email' />
    //     <button onClick={handleClick}>Submit</button>
    //     </div>
    //     ): (<h1>You are not 18 , come after 18!</h1>)}
          
    //     </form>
    // </div>

    <div>
      <form>
        <div>
      <h1>{age}</h1>
      <button onClick={increaseAge }>Increase</button>
        <input type="email" placeholder='enter Email' value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder='enter Password' value={password} 
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
        </div>
      </form>
    </div>
    
  )
}

export default RegisterScreen;


// conditional Rendering, done 
// hooks