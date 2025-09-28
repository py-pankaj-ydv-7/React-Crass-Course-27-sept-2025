// import Products from './Products';

// function App() {
//   return (

//     <div className="w-full h-screen  bg-zinc-900 p-4">
//       <div className="w-44 h-32 rounded-xl bg-red-600 text-white p-4">
//         <h3>hello kaise ho</h3>
//       </div>
//       <Products/>
//       </div>
//   );
// }

// export default App;
import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b] = useState(69);
  // const clickUpdate = ()=>{
  //   b(a+1);
  // }
  
  return (
    <div>
      <h1 className='' >{a}</h1>
      <button className='px-3 py-1 bg-green-500 rounded-md text-xs' onClick={()=> b(a+1)}>click</button>
      <Products  naam="pankaj" age="25" data={{name: "pankaj2", age: 25}}/>
    </div>
  )
}
export default App