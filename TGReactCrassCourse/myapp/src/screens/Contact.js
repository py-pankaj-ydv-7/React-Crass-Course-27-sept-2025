// Boilerplate code:

import React from "react";
import store from "../store/store";
import { incrementByAmout } from "../store/reducer";
import { useSelector ,useDispatch } from "react-redux";
// import {  } from "react-redux";

function Contact(){

    const dispatch = useDispatch();
    // Accessing the state from the store
    const value = useSelector(state => state.value);
    
    return (
        <div>
            <h1>{value}</h1>
 
    <button onClick={()=> {
        
    dispatch(incrementByAmout(5));
    console.log("state updated! ");
    }}
    >Increase Count By 5</button>
     </div>
    );
}

export default Contact;

// //Manufacturing  Firm - Screens

// import React from "react";
// import { useDispatch } from "react-redux";
// import { incrementByAmount } from "../store/reducer";

// function Contact(){
//   const dispatch = useDispatch();

//   return (
//     <button onClick={() => {
//       dispatch(incrementByAmount(5));
//       console.log("state updated!");
//     }}>
//       Increase Count By 5
//     </button>
//   );
// }

// export default Contact;
