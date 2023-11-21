import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { edittask } from '../JS/Action';
import { Button, Form, Modal } from 'react-bootstrap';

const Edit = ({task}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newtask,setNewtask] = useState(task.text)
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch (edittask(task.id , newtask))
        handleClose()
    }
    return (
    <div>
        <Button variant="primary" onClick={handleShow}>
            EDIT 
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control placeholder="edit task" value={newtask} onChange={(e) => setNewtask(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>

    </div>
  )
}

export default Edit