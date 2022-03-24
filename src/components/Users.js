import React from 'react';
import User from './User'

function Users({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <User person={person} key={index} />
      ))}
    </ul>
  )
}

export default Users;