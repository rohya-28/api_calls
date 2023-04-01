import React , {useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';

function App() {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Something Went Wrong')
    }
    
      const transformedMovies = data.results.map(movieData => {
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        };
      })
      setMovie(transformedMovies);
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  }

  let content = <p>Found No Movies</p>

  if (isLoading) {
    content = <p>Loading Please Wait</p>
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchMovieHandler}>Fetch Data</button>
      </section>
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;
