import React from 'react'
import UserCard from '../components/UserCard'
import data from '../utils/data'

const UserList = () => {
    
  return (
    <div>{data.map(({name,email,rollNo})=>{
        return (
            <div>
                <UserCard name={name} email={email} rollNo={rollNo}/>
            </div>
        )
    })}</div>
  )
}

export default UserList;