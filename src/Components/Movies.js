import React from 'react'
import Classes from './Movies.module.css'

const Movies = (props) => {
  return (
    <div>
        <li className={Classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
    </div>
  )
}

export default Movies