import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "./ModalMovie";


export default function Movie(element) {
  const [show, setShow] = useState(false);
  const [chosenM, setChosenM] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setChosenM(element.movie);
    setShow(true);
  }

  return (
    <>
     
      <Card style={{ width: '18rem', margin: '5px', backgroundColor: 'white' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${element.movie.poster_path}`} />
        <Card.Body style={{ height: '400px' }}>
          <Card.Title>{element.movie.title || ` Sorry not found Titel `}</Card.Title>
          <Card.Text style={{ overflowX: 'hidden', scrollBehavior: 'smooth', height: '200px' }}>
            {element.movie.overview}
          </Card.Text>
          <Card.Text>
            {element.movie.release_date || `No Date`}
          </Card.Text>
          <Button variant="primary" onClick={() => handleShow(element.movie)}>Show Movie</Button>
        </Card.Body>
      </Card>

      {/* {console.log({chosenM})} */}
      {

        chosenM && <ModalMovie show={show} handleClose={handleClose} chosenM={chosenM} updateMovie={element.updateMovie}/>
      }

    </>
  );
}
