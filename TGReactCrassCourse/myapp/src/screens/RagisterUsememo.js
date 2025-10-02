import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';

const ExpensiveCalculation = (num) =>{
    console.log("Calculating...");
    for(let i = 0; i<= 1000000000; i++){
        num +=1;
    }
    return num;
}

function RagisterUsememo() {
    const [count, setCount]= useState(0);
    const [todos, setTodos]= useState([]);
    // memoization - it is a storing this inside a cache 
    const calculation = useMemo(()=>ExpensiveCalculation(count), [count] );
    // todos - Array - map - access every single element and then use it to display a component or a screen
    const increment =()=>{
        setCount((c)=> c+1)
    };
    const addTodo = ()=>{
        setTodos((t) => [...t, "New Todo"]);
    };
  return (
    <div>
        <div>
            <h2>My Todos</h2>
            {
                todos.map((todo, index)=>(
                 <p key={index}>{todo}</p>

                ))
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr/>
        <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        </div>
        {/* <button >Take Me To User List</button> */}
        <Link to="/user-list">Take Me To User List Screen</Link>
    </div>
  )
}

export default RagisterUsememo;