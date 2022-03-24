import React, { useState } from 'react';

function User(props) {
  const { 
    picture: {medium},
    email, 
    gender,
    phone, 
    name: { first, last },  
    dob: { age }, 
    location: { city, state, country }
  } = props.person;

  const [isHidden, setHidden] = useState(true);

  const handleDetails = () => {
    setHidden(!isHidden)
    console.log('isClicked')
  }

  return (
    <li key={email}>
      <img src={medium} alt={first} />
      <h3>{first} {last}</h3>
      <button className="detailsBtn" onClick={() => handleDetails()}>{isHidden ? "Show Details" : "Hide Details"}</button>
      {
        !isHidden && 
        <div>
          <i class="fas fa-user"></i> {gender}, {age}<br/>
          <i class="fa-solid fa-location-pin"></i> {city}, {state}, {country}<br/>
          <i class="fas fa-envelope"></i> {email}<br/>
          <i class="fa-solid fa-phone"></i> {phone}
        </div>
      }
    </li>
  )
}

export default User;