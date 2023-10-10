
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Trash from '../assets/images/trash-icon.svg'

export const DeleteIcon = ({ onClick }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleYes = () => {
        setShowModal(false)
        onClick()
    }
    return <>
        <img className='action-item' style={{ cursor: 'pointer' }} src={Trash} onClick={() => setShowModal(true)} />
        {showModal ? <Modal show={true} onHide={handleClose} size="lg">
            <Modal.Header closeButton={false}>
                <Modal.Title>Delete</Modal.Title>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete?
                <div className="modal-footer d-flex justify-content-end">
                    <Button variant="primary" onClick={handleYes}> Yes</Button>
                    <Button variant="danger" onClick={handleClose}>No</Button>
                </div>
            </Modal.Body>
        </Modal> : null
        }
    </>
}