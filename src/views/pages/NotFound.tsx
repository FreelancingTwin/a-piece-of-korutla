import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h1>Page not created yet</h1>
      <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound
