
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function ModalMovie(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenM.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    {props.chosenM.overview}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
