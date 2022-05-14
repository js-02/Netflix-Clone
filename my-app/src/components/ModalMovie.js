
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';




export default function ModalMovie(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenM.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.chosenM.overview}
                    {/* <Form>
                      <Form.Group
                       className="mb-3"
                       controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Add Your Opinon</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
           </Form> */}
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
