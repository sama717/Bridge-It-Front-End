import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import '../../dashboard/workspace/[groupid]/Task/challenges/challenge.css';
// import '../../dashboard/workspace/[groupid]/details.css'
export default function Taskform(){
     const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    return(
        <div>
     <Button className="new-challenge"  onClick={handleShow}>
                 + New Challenge
           </Button>
           <Modal  show={show} onHide={handleClose} backdrop="static" animation={false} >
              <Modal.Header closeButton className="modal-header">
              <Modal.Title className="modalTitle">New Challenge</Modal.Title>
            </Modal.Header>
            <Modal.Body>
         <Form>
           <Form.Group className="mb-2" controlId="taskTitle">
             <Form.Label className="modalLabel">Title</Form.Label>
             <Form.Control type="text" placeholder="Enter challenge title"  />
           </Form.Group>
      
           <Form.Group className="mb-2" controlId="taskDescription">
             <Form.Label className="modalLabel">Description</Form.Label>
             <Form.Control className="area" as="textarea" rows={3} placeholder="Please describe your challenge details" />
           </Form.Group>
         </Form>
       </Modal.Body>
       <Modal.Footer className="buttons">
         <button className="cancleTask" onClick={handleClose}> Cancle</button>
         <button className="addTask"onClick={handleClose} >Add</button>
       </Modal.Footer>
       </Modal>
        </div>
    );

    
}