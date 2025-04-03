
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../../components/dashboardComponents/Layout";
import './details.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const GroupDetails = () => {
  const [group, setGroup] = useState(null);
  const [error, setError] = useState(null);
  const [showOptions, setShowOptions] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const groupid = window.location.pathname.split("/").pop();
    if (!token || !groupid) return;

    fetch(`https://api.bridgeit.site/api/groups/${groupid}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setGroup(data.group);
          const userName = data.group.users[0].name;
          localStorage.setItem('userName', userName);
        } else {
          setError("Failed to load group details.");
        }
      })
      .catch((error) => {
        console.error("Error fetching group details:", error);
        setError("An error occurred while fetching group details.");
      });
  }, [token]);
  const handleEditGroup = (groupId) => {
    const updatedTitle = prompt("Enter a new title for the group:");
    if (!updatedTitle) return;
    fetch("https://api.bridgeit.site/api/groups/update", {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        groupId: groupId.toString(),
        tittle: updatedTitle,
        doc_id: "1",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setGroup({ ...group, title: updatedTitle });
        }
      })
      .catch((error) => console.error("Error updating group:", error));
  };
  const confirmDeleteGroup = (groupId) => {
    setGroupToDelete(groupId);
    setShowDeleteModal(true);
  };
  const handleDeleteGroup = () => {
    fetch("https://api.bridgeit.site/api/groups/destroy", {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        groupId: groupToDelete.toString(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          router.push("/dashboard/workspace"); 
        }
      })
      .catch((error) => console.error("Error deleting group:", error))
      .finally(() => {
        setShowDeleteModal(false);
        setGroupToDelete(null);
      });
  };
  if (error) {
    return (
      <Layout>
        <div className="container py-5">
          <h1>Error</h1>
          <p>{error}</p>
        </div>
      </Layout>
    );
  }
  if (!group) {
    return (
      <Layout>
        <div className="container py-5">
          <h1>Loading...</h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="container py-5">
        <div className="card mb-4">
          <h1 className="card-title">{group.title}</h1>
          <div
            className="card-body"
            style={{
              background: "linear-gradient(100deg, #d9e7ff, #007BFF, #d9e7ff)",
              borderRadius: "7px",
              padding: "30px",
              color: "#000",  
            }}
          >
            <div className="outprogress ">
            <div className='card-details'>
              <button className='btn btn-outline-secondary file'><i className="bi bi-folder"></i></button>
              <button className='btn btn-outline-secondary chat'><i className="bi bi-chat-dots"></i></button>
              <button className='btn btn-outline-secondary complete'>
               <i className="fa-solid fa-spinner"></i>
                  <div className='progress-btn'>
                  <span>24% Complete</span>
                  <div className="progress " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
               <div className="progress-bar" style={{ width: '25%', height: '4px', backgroundColor: '#3B95F6' }}></div>
            </div>
          </div>
         </button>
      </div>
      </div>
            <div  className="share" >
            <FontAwesomeIcon icon={faShareNodes} style={{color:"#004EA0",fontSize:"20px"}} />
            </div>    
            <div className="row align-items-center ">
              <div className="col-md-3 text-center">
                <div className="out"
                  style={{backgroundColor: "#FFFFFF",width: "80px",height: "80px",borderRadius: "40px",display: "flex",justifyContent: "center",alignItems: "center",margin: "0 0",
                  }}
                >
                  <h5
                    style={{
                      background: "linear-gradient(145deg, #002572, #007BFF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "36px",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    {group.title.substring(0, 2).toUpperCase()}
                  </h5>
                  <div className="editcircle">
      <FontAwesomeIcon icon={faPencil} style={{ color: "#004EA0", fontSize: "15px" }} />
    </div>
                </div>
              </div>
              <div className="col-md-9 mt-5 " >
                <div className="row ">
                  <div className="col-md-4 col ">
                    <p className="mb-1"><strong>CREATED</strong></p>
                  </div>
                  <div className="col-md-3 col">
                    <p className="mb-1"><strong>DEADLINE</strong></p>
                  </div>
                  <div className="col-md-3 col">
                    <p className="mb-1"><strong>CURRENT STAGE</strong></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col">
                    <p>{new Date(group.created_at).toLocaleString("en-US", {month: "long",day: "numeric",
                     year: "numeric",hour: "numeric",minute: "numeric",hour12: true,
                    })}</p>
                  </div>
                  <div className="col-md-3 col">
                    <p>{new Date(group.deadline).toLocaleDateString("en-US")}</p>
                  </div>
                  <div className="col-md-3 col">
                    <p>{group.stage}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn more-btn"
              onClick={() => setShowOptions(showOptions === group.id ? null : group.id)}
            >
              <i className="bi bi-three-dots"></i>
            </button>
            {showOptions === group.id && (
              <div className="options-menu">
                <button onClick={() => handleEditGroup(group.id)}>Edit</button>
                <button onClick={() => confirmDeleteGroup(group.id)}>Delete</button>
              </div>
            )}
          </div>
        </div>
        <div className="card-text">
          <div className="d-block">Description</div>
          <p style={{color:"gray"}} >{group.description || "No description available"}</p>
        </div>
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Are you sure you want to delete this group?</p>
              <div className="modal-buttons">
                <button className="btn confirm" onClick={handleDeleteGroup}>Delete</button>
                <button className="btn delete" onClick={() => setShowDeleteModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
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
        <Form.Control type="text" placeholder="Enter your task title"  />
      </Form.Group>
      <Form.Group className="mb-2" controlId="taskPriority">
        <Form.Label className="modalLabel">Assigned  Members</Form.Label>
        <Form.Control as="select" className="OPTION">
          <option className="OPTION"  value="low">Choose assigned members to this task</option>
          <option className="OPTION" value="medium">Medium</option>
          <option className="OPTION" value="high">High</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
  <Form.Label className="modalLabel">Urgency Level</Form.Label>
  <div className="d-flex align-items-center">
    <Form.Check
    style={{color:"#6B7280"}}
      type="radio" label={<span style={{ color: "#6B7280",fontWeight:"lighter" }}>Urgent</span>}
      name="taskType"
      value="Urgent"
      defaultChecked
      className="me-3"/>
    <Form.Check
      type="radio"
      label={<span style={{ color: "#6B7280",fontWeight:"lighter" }}>Normal</span>}
      name="taskType"
      value="Normal"
      className="me-3"/>
    <Form.Check
      type="radio"
      label={<span style={{ color: "#6B7280",fontWeight:"lighter" }}>Later</span>}
      name="taskType"
      value="Later"
      className="custom-radio"/>
  </div>
    </Form.Group>
      <Form.Group className="mb-2" controlId="taskDescription">
        <Form.Label className="modalLabel">Description</Form.Label>
        <Form.Control className="area" as="textarea" rows={3} placeholder="Please describe your task details" />
      </Form.Group>
      
    <Form.Group controlId="taskDeadline">
  <Form.Label className="modalLabel">Deadline</Form.Label>
  <Form.Control
    type="text" 
    placeholder="Choose your project deadline"
    onFocus={(e) => (e.target.type = "date")} 
    onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)} 
  />
</Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer className="buttons">
    <button className="cancleTask" onClick={handleClose}> Cancle</button>
    <button className="addTask"onClick={handleClose} >Add</button>
  </Modal.Footer>
  </Modal>
      </div>
    </Layout>
  );
};
export default GroupDetails;