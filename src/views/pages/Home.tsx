import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/">Home</Link>

       <form action="/" method="post">
         <input type="text" name="username" id="one"/>
         <input type="submit" name="submit" id="submit" value="Submit"/>
       </form>
    </div>
  )
}

export default Home
