import React from 'react'
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/">Home</Link>
    </div>
  )
}

export default Contact
