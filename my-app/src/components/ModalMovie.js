import { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ModalMovie(props) {
  let commentRef = useRef();
  function handleComment(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log({ userComment });
    let newMovie = { ...props.chosenM, userComment };
    //  let newMovie = { ...props.chosenM, comment: userComment}
    props.updateMovie(newMovie, props.chosenM.id);
    console.log({newMovie})
  }

  async function handleAddFav(e, movie) {
    e.preventDefault();
    console.log("fav is =", movie);
    let url = `http://movie-js-02.herokuapp.com/addMovie`;
    let over = movie.overview.substring(0, 100);
    let data = {
      id: movie.id,
      title: movie.title,
      overview: over,
      img: movie.poster_path,
      comment: movie.comment,
    };

    console.log(data);
    // let response = await fetch(url, {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    // })
    console.log(JSON.stringify(data));
    await fetch(url, {
      method: "POST",
      //    mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Referrer-Policy": "origin-when-cross-origin",
      },
      body: JSON.stringify(data),
    });
    // let addedMovie = await response.json();
    // console.log("addedMovie", addedMovie);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#7F8487" }}>
          <Modal.Title>{props.chosenM.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#7F8487" }}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${props.chosenM.poster_path}`}
            alt="Movie poster"
          />
          <br></br>
         
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Entre you comment"
              />
              
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleComment(e)}
            >
              Submit Comment
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleAddFav(e, props.chosenM);
              }}
            >
              Add to fav
              {/* {console.log("fav is="+ props.chosenM)} */}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#7F8487" }}>
     
        </Modal.Footer>
      </Modal>
    </>
  );
}
