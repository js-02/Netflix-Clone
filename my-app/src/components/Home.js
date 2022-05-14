// import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
// import Cards from './Cards';
// import "./style.css";
import MovieList from "./MovieList";

export default function Home() {

  const [movies, setMovie] = useState([]);

  async function getMovie() {
    let url = "https://movie-js-02.herokuapp.com/trending";
    let response = await fetch(url);
    let movieInfo = await response.json();
    setMovie(movieInfo);
  }
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>Movie</h1>
  {
    (movies.length > 0) && <MovieList movies={movies} />
  }
  
</>
)
}