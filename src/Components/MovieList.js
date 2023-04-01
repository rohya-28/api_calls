import React from 'react'
import Classes from './MovieList.module.css'
import Movies from './Movies'

const MovieList = (props) => {
  return (
    <ul className={Classes['movies-list']}>
    {props.movies.map((movie) => (
      <Movies
        key={movie.id}
        title={movie.title}
        releaseDate={movie.releaseDate}
        openingText={movie.openingText}
      />
    ))}
  </ul>
  )
}

export default MovieList