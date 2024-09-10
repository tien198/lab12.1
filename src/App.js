import { useEffect, useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import { getMovies } from './ultilities/httpRequest';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const fetMovies = await getMovies()
      const moviesArr = Object.entries(fetMovies).
        map((val) => { return { id: val[0], ...val[1] } })
      setMovies(moviesArr)
    }
    fetchMovies()
  }, [])

  return (
    <section>
      <AddMovie movies={movies} setMovies={setMovies} />
      <MovieList>
        {
          movies.map(i => {
            return <Movie key={i.id}
              title={i.title}
              openingText={i.openingText}
              releaseDate={i.releaseDate} />
          })
        }
      </MovieList>
    </section>
  );
}

export default App;
