import React from "react";
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <main className="Home">
        <h1>404 - Page Not Found</h1>
        <p>Go <Link exact to="/">Home</Link></p>
    </main>
  )
}

export default Home