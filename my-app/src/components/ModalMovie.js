
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';




export default function ModalMovie(props) {
    console.log("prop="+props.chosenM)
    return (
        <>
            <Modal  style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.45)"
          },
          content: {
            width: 600,
            height:250,  
            position: "absolute",
            top: "30%",
            left: "30%",
            right: "40px",
            border: "1px solid #999",
            background: "rgba(54, 58, 67, 1)",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "6px",
            outline: "none",
            padding: "20px"          
          }
        }} show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                
                    <Modal.Title>{props.chosenM.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <img src={`https://image.tmdb.org/t/p/w400/${props.chosenM.poster_path}`} alt="Movie poster" />
                <br></br>

                    {props.chosenM.overview}

                </Modal.Body>
                <Modal.Footer>
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
