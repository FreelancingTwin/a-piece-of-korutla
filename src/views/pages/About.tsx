import * as React from 'react';
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default About

