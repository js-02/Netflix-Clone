import { useEffect, useState } from "react";
import MovieList from "./MovieList";
// import Cards from './Cards';
import Navbar from './Navbar';
// import data from "./data";


export default function Home() {

  const [movies, setMovie] = useState([]);

  async function getMovie() {
    let url = "http://movie-js-02.herokuapp.com/trending";
   
    let response = await fetch(url, {
        method: 'GET',
        
        headers: {
          // "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Referrer-Policy": "same-origin"
        },
        
    });

    let movieData = await response.json();
    setMovie(movieData)
  }

  function updateMovie(newMovie, id) {
    console.log("length = ",movies.length)
    let updatedMovie = movies.map((movie) => {
        if (movie.id == id) {
          movie.comment = newMovie.userComment;
          console.log("update = "+movie.comment)
            return movie;
        } else {
            return movie;
        }
    })

    setMovie(updatedMovie);

}
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(18rem, 1fr))', backgroundColor: 'white' }}>
        <h1>Movie</h1>
        {/* {
          (movies.length > 0) && <MovieList movies={movies} />
         
        }  */}
        
        { (movies.length > 0) && <MovieList  movies={movies} updateMovie={updateMovie} />}
      </div>
    </>
  );
}