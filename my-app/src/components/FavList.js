import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import Button from "react-bootstrap/Button";

export default function FavList() {
  const [favMovie, setFavMovie] = useState();

  async function getFavMovie() {
      let url = `https://movie-js-02.herokuapp.com/favMovie`
      let response = await fetch(url, {
          method: 'GET'
      });

      let movieData = await response.json();
      setFavMovie(movieData)
  }

  async function handleDelete(id) {
      let url = `https://movie-js-02.herokuapp.com/deletefavMovie/?id=${id}`;
      let response = await fetch(url, {
          method: 'DELETE',
      })
      // let deletedRecipe = await response.json();

      if (response.status == 204) {
          getFavMovie();
          alert("Movie deleted successfully");
    }
  }
  useEffect(() => {
    getFavMovie();
  }, []);
  return (

    
      <>
      <Navbar />
          <h1>Favourite Movie Page</h1>
          {
              favMovie && favMovie.map((favMovie) => {
                  return (
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={favMovie.image} />
                          <Card.Body>
                              <Card.Title>{favMovie.title}</Card.Title>
                              <Card.Text>
                                  {favMovie.summary}
                              </Card.Text>
                              <Button variant="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
                          </Card.Body>
                      </Card>
                  )
              }
              )
          }

      </>
  )
}
