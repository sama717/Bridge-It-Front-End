// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import '../../dashboard/workspace/[groupid]/details.css';
// export default function Taskform(){
//      const [show, setShow] = useState(false);
//       const handleClose = () => setShow(false);
//       const handleShow = () => setShow(true);
//     return(
//         <div>
//      <Button className="addNewTask" variant="primary" onClick={handleShow}>
//             +  New
//            </Button>
//            <Modal  show={show} onHide={handleClose} backdrop="static" animation={false} >
//               <Modal.Header closeButton className="modal-header">
//               <Modal.Title className="modalTitle">Add New Task</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//          <Form>
//            <Form.Group className="mb-2" controlId="taskTitle">
//              <Form.Label className="modalLabel">Title</Form.Label>
//              <Form.Control type="text" placeholder="Enter your task title"  />
//            </Form.Group>
//            <Form.Group className="mb-2" controlId="taskPriority">
//              <Form.Label className="modalLabel">Assigned  Members</Form.Label>
//              <Form.Control as="select" className="OPTION">
//                <option className="OPTION"  value="low">Choose assigned members to this task</option>
//                <option className="OPTION" value="medium">1</option>
//                <option className="OPTION" value="high">2</option>
//                    <option className="OPTION" value="high">3</option>
//                        <option className="OPTION" value="high">4</option>
//              </Form.Control>
//            </Form.Group>
//            <Form.Group className="mb-2">
//        <Form.Label className="modalLabel">Urgency Level</Form.Label>
//        <div className="d-flex align-items-center">
//          <Form.Check
//          style={{color:"#6B7280"}}
//            type="radio" label={<span style={{ color: "#6B7280",fontWeight:"lighter" }}>Urgent</span>}
//            name="taskType"
//            value="Urgent"
//            defaultChecked
//            className="me-3"/>
//          <Form.Check
//            type="radio"
//            label={<span style={{ color: "#6B7280",fontWeight:"lighter" }}>Normal</span>}
//            name="taskType"
//            value="Normal"
//            className="me-3"/>
//          <Form.Check
//            type="radio"
//            label={<span style={{ color: "#6B7280",fontWeight:"lighter" }}>Later</span>}
//            name="taskType"
//            value="Later"
//            className="custom-radio"/>
//        </div>
//          </Form.Group>
//            <Form.Group className="mb-2" controlId="taskDescription">
//              <Form.Label className="modalLabel">Description</Form.Label>
//              <Form.Control className="area" as="textarea" rows={3} placeholder="Please describe your task details" />
//            </Form.Group>
           
//          <Form.Group controlId="taskDeadline">
//        <Form.Label className="modalLabel">Deadline</Form.Label>
//        <Form.Control
//          type="text" 
//          placeholder="Choose your project deadline"
//          onFocus={(e) => (e.target.type = "date")} 
//          onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)} 
//        />
//      </Form.Group>
//          </Form>
//        </Modal.Body>
//        <Modal.Footer className="buttons">
//          <button className="cancleTask" onClick={handleClose}> Cancle</button>
//          <button className="addTask"onClick={handleClose} >Add</button>
//        </Modal.Footer>
//        </Modal>
//         </div>
//     );

    
// }


'use client';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import '../../dashboard/workspace/[groupid]/details.css';

export default function Taskform() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [urgency, setUrgency] = useState('Later');
  const [deadline, setDeadline] = useState('');
  const [members, setMembers] = useState([]);

  const groupId = 16; // Ideally pass this dynamically
  const token = 'your_token_here'; // Replace this with your real token

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/groups/${groupId}/members`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setMembers(data);
        } else if (data.data && Array.isArray(data.data)) {
          setMembers(data.data);
        }
      });
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('assigned_to', assignedTo);
    formData.append('deadline_date', deadline);
    formData.append('group_id', groupId);
    formData.append('Urgency', urgency);

    try {
      const res = await fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${groupId}/tasks`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Task created successfully:", data);
        handleClose();
      } else {
        console.error("Failed to create task:", data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <Button className="addNewTask" variant="primary" onClick={handleShow}>
        +  New
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modalTitle">Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="taskTitle">
              <Form.Label className="modalLabel">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="taskPriority">
              <Form.Label className="modalLabel">Assigned Members</Form.Label>
              <Form.Control
                as="select"
                className="OPTION"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option value="">Choose assigned member</option>
                {members.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="modalLabel">Urgency Level</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Check
                  type="radio"
                  label={<span style={{ color: "#6B7280", fontWeight: "lighter" }}>Urgent</span>}
                  name="taskType"
                  value="Urgent"
                  checked={urgency === "Urgent"}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="me-3"
                />
                <Form.Check
                  type="radio"
                  label={<span style={{ color: "#6B7280", fontWeight: "lighter" }}>Normal</span>}
                  name="taskType"
                  value="Normal"
                  checked={urgency === "Normal"}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="me-3"
                />
                <Form.Check
                  type="radio"
                  label={<span style={{ color: "#6B7280", fontWeight: "lighter" }}>Later</span>}
                  name="taskType"
                  value="Later"
                  checked={urgency === "Later"}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="custom-radio"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-2" controlId="taskDescription">
              <Form.Label className="modalLabel">Description</Form.Label>
              <Form.Control
                className="area"
                as="textarea"
                rows={3}
                placeholder="Please describe your task details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="taskDeadline">
              <Form.Label className="modalLabel">Deadline</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose your project deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="buttons">
          <button className="cancleTask" onClick={handleClose}>Cancel</button>
          <button className="addTask" onClick={handleSubmit}>Add</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
