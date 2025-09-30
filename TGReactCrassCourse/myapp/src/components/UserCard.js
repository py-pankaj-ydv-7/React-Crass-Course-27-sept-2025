import React from 'react'

function UserCard({name,email,rollNo}) {
  return (
    <div>
    <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{rollNo}</h1>
    </div>
  )
}

export default UserCard;