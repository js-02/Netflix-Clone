import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "./ModalMovie";


export default function Movie(element) {
  const [show, setShow] = useState(false);
  const [chosenM, setChosenM] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setChosenM(element.movies);
    setShow(true);
  }

  return (
    <>
      <Card style={{ width: '18rem', margin: '5px', backgroundColor: '#7F8487' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${element.movies.poster_path}`} />
        <Card.Body style={{ height: '400px' }}>
          <Card.Title>{element.movies.title || ` Sorry not found Titel `}</Card.Title>
          <Card.Text style={{ overflowX: 'hidden', scrollBehavior: 'smooth', height: '200px' }}>
            {element.movies.overview}
          </Card.Text>
          <Card.Text>
            {element.movies.release_date || `No Date`}
          </Card.Text>
          <Button variant="primary" onClick={() => handleShow(props.movie)}>Show Movie</Button>
        </Card.Body>
      </Card>


      {
        chosenM && <ModalMovie show={show} handleClose={handleClose} chosenM={chosenM} updateMovie={element.updateMovie}/>
      }

    </>
  );
}
