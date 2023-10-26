
import React from "react";
import { useParams } from 'react-router-dom'

const Param = props => {
  const {id} = useParams()

  return (
    <main className="Param">
        <div className="container">
          <h1>Params Page:</h1>
          <p>Value: {id}</p>
        </div>
    </main>
  )
}

export default Param