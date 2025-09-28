import React, { useState } from 'react'

function Products({naam,age,data}) {
  const [a,b] = useState(false)
  return (
    <>
    <div className="text-red-500 p-4 bg-amber-200 rounded-4xl">me product component hu</div>
    <h1>{naam} 67</h1>
    <h2>{age}</h2>
    <h3>{data.age}</h3>
    <h3>{data.name}</h3>
    <h4 className={`${a=== false ? "text-red-600" : "text-blue-600"}`}>{a===false?"hello":"hey"}</h4>
    <button onClick={()=>b(!a)}>change</button>
    </>
  )
}

export default Products;