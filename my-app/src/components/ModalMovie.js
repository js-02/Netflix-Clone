
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';




export default function ModalMovie(props) {
    let commentRef = useRef();
    function handleComment(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log({ userComment });
        let newMovie = { ...props.chosenM, userComment };
        // let newMovie = { ...props.chosenM, comment: userComment}
        props.updateRecipe(newMovie, props.chosenM.id);

    }

    async function handleAddFav(e, recipe) {
        e.preventDefault();

        let url = `https://movie-js-02.herokuapp.com/addFavMovie`;
        // let data = {
        //     title: recipe.title,
        //     readyInMinutes: recipe.readyInMinutes,
        //     summary: recipe.summary,
        //     image: recipe.image,
        //      comment: recipe.comment,
        // }

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        let addedMovie = await response.json();
        console.log("addedRecipe", addedMovie);
    }


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#7F8487' }}>
                    <Modal.Title>{props.chosenM.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#7F8487' }}>
                    <img src={`https://image.tmdb.org/t/p/w400/${props.chosenM.poster_path}`} alt="Movie poster" />
                    <br></br>
                    {props.chosenM.overview}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Entre you comment" />
                            <Form.Text className="text-muted">
                                Add your own comment to make recipes unique
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
                            Submit Comment
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e) => { handleAddFav(e, props.chosenM) }}>
                            Add to favorites
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#7F8487' }}>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
