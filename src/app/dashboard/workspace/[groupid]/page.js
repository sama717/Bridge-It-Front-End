
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
import { Container, Row, Col, Card ,Dropdown} from "react-bootstrap";
import React from'react';
import styles from '../../../components/createTaskcomponents/tasks.module.css';
import  Link  from 'next/link';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'next/navigation';
const GroupDetails = () => {
  const [group, setGroup] = useState(null);
  const [error, setError] = useState(null);
  const [showOptions, setShowOptions] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [selected, setSelected] = useState('To Do');
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [urgency, setUrgency] = useState('Later');
  const [deadline, setDeadline] = useState('');
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const params = useParams();
  const group_id = params.groupid;
  useEffect(() => {
    const groupid = window.location.pathname.split("/").pop();
    if (!token || !groupid) return;

    fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/groups/${groupid}`, {
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

 useEffect(() => {
  fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/groups/${group_id}/members`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data.members)) {
        setMembers(data.members);
      } else {
        console.warn("Unexpected structure:", data);
      }
    })
    .catch(error => {
      console.error("Failed to fetch members:", error);
    });
}, []);
useEffect(() => {
  fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${group_id}/tasks`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Raw fetched tasks:', data.tasks);
      setTasks(data.tasks || []);
    })
    .catch((error) => console.error("Error fetching tasks:", error));
}, []);

    const handleTaskSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('assigned_to', assignedTo);
    formData.append('deadline_date', deadline);
    formData.append('group_id', group_id);
    formData.append('Urgency', urgency);

    try {
      const res = await fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${group_id}/tasks`, {
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
const upcomingTasks = tasks.filter((task) => task.status === "ToDo");
const todayTasks = tasks.filter((task) => task.status === "Ongoing");
const completedTasks = tasks.filter((task) => task.status === "Done");
const handleStatusChange = (taskId, newStatus) => {
  fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${group_id}/tasks/updateStatus/${taskId}`, {
    method: "POST", 
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
     body: JSON.stringify({ status: newStatus })
  })
   .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  })
    .catch((err) => console.error("Failed to update status:", err));
};
const getSvgColor = (status) => {
  if (status === "ToDo") return "#F2994A";       
  if (status === "Ongoing") return "#EB5757";    
  if (status === "Done") return "#219653";       
};

const handleTaskClick = (task) => {
  localStorage.setItem("selectedTask", JSON.stringify(task));
  router.push(`/dashboard/workspace/${task.id}/Task/challenges`);
};
const renderTasks = (taskList) =>
  taskList.map((task) => (
    <Card key={task.id} style={{ width: "17rem", marginBottom: "1rem" }}
    
    >
      <Card.Body>
        <Card.Title className={styles.tasktitle} onClick={() => handleTaskClick(task)}>
          <svg className="me-1"xmlns="http://www.w3.org/2000/svg"width="20"height="20"viewBox="0 0 24 24">
            <path fill={getSvgColor(task.status)} d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/>
          </svg>
          {task.title}
        </Card.Title>
        <p className="text-muted">{task.description}</p>
        <Dropdown
          onSelect={(newStatus) => handleStatusChange(task.id, newStatus)} >
          <Dropdown.Toggle className={styles.toggleongoin} variant="light" id="dropdown-basic" style={{background:"red !important"}}>
            {task.status}
          </Dropdown.Toggle>
         <Dropdown.Menu  >
            <Dropdown.Item eventKey="ToDo" style={{fontSize:"12px"}}>To Do</Dropdown.Item>
            <Dropdown.Item eventKey="Ongoing" style={{fontSize:"12px"}}>Ongoing</Dropdown.Item>
            <Dropdown.Item eventKey="Done" style={{fontSize:"12px"}}>Done</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="mt-2 text-muted">
           <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#FFA726" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"/>
                </svg>
          <small>Deadline: {task.deadline_date}</small>
        </div>
      </Card.Body>
    </Card>
  ));
  const fetchTasksByUrgency = (urgency) => {
  let url = "";

  if (urgency === "All") {
    url = `https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${group_id}/tasks`;
  } else {
    url = `https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${group_id}/tasksBy/${urgency}`;
  }

  fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`Tasks for urgency "${urgency}":`, data);
      setTasks(data.tasks || []);
    })
    .catch((err) => {
      console.error(`Failed to fetch tasks for ${urgency}`, err);
    });
};

  const handleEditGroup = (groupId) => {
    const updatedTitle = prompt("Enter a new title for the group:");
    if (!updatedTitle) return;
    fetch("https://bridge-it-backend-main-tfxagd.laravel.cloud/api/groups/update", {
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
    fetch("https://bridge-it-backend-main-tfxagd.laravel.cloud/api/groups/destroy", {
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
          <span style={{fontSize:"22px"}}>Loading...</span>
          <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>
      </Layout>);}
  return (
    <Layout>
      <div className="container py-5 ">
        <div className="card mb-4" style={{border:"none"}}>
          <h1 className="card-title">{group.title}</h1>
          <div
            className="card-body"
            style={{background: "linear-gradient(100deg, #d9e7ff, #007BFF, #d9e7ff)",borderRadius: "7px",padding: "30px",color: "#000", }}>
            <div className="outprogress ">
            <div className='card-details'>
              <button className='btn btn-outline-secondary file'><i className="bi bi-folder"></i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="#3B95F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 3h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"/><path d="M17 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></g></svg></button>
              <button className='btn btn-outline-secondary chat'><i className="bi bi-chat-dots"></i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="#3B95F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"/><path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"/></g></svg></button>
              <button className='btn btn-outline-secondary complete'>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#3B95F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223"/></svg>
                  <div className='progress-btn'>
                  <span>24% Complete</span>
                  <div className="progress " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
               <div className="progress-bar" style={{ width: '25%', height: '4px', backgroundColor: '#3B95F6' }}></div>
            </div>
          </div>
         </button>
         <Link href={`/dashboard/workspace/${group_id}/Documentation`}>
          <button className="documation">
            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#FFC107" d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"/></g></svg>Documentation </button>
            </Link>
      </div>
      </div>
            <div  className="share" >
            <FontAwesomeIcon icon={faShareNodes} style={{color:"#004EA0",fontSize:"20px"}} />
            </div>    
            <div className="row align-items-center ">
              <div className="col-md-3 text-center">
                <div className="out"
                  style={{backgroundColor: "#FFFFFF",width: "80px",height: "80px",borderRadius: "40px",display: "flex",justifyContent: "center",alignItems: "center",margin: "0 0", }}>
                  <h5
                    style={{background: "linear-gradient(145deg, #002572, #007BFF)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",
                      fontSize: "36px",fontWeight: "bold",margin: 0,}}>
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
                 <span className="dots">&#8230;</span>
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
        {/* <Taskfrom></Taskfrom> */}

     <Button className="addNewTask" variant="primary" onClick={handleShow}>
             +  New
           </Button>
          <div className="urgency ms-3" style={{ display: "inline-block" }}>
         <button className="ms-3" onClick={() => fetchTasksByUrgency("All")}>All</button>
         <button className="ms-5" onClick={() => fetchTasksByUrgency("Urgent")}>Urgent</button>
        <button className="ms-5" onClick={() => fetchTasksByUrgency("Normal")}>Normal</button>
         <button className="ms-5" onClick={() => fetchTasksByUrgency("Later")}>Later</button>
       </div>
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
               <button className="addTask" onClick={handleTaskSubmit}>Add</button>
             </Modal.Footer>
           </Modal>
       
     {/* Task body */}
         <Container className="mt-4">
      <Row>
        <Col className={`${styles.taskhead} me-1`} sm>
          Today’s Tasks <button className={`ms-1 ${styles.taskCounter}`}>{todayTasks.length}</button>
          <div className={styles.addtask}>
            <button className={styles.plussign}>+</button>
          </div>
        </Col>
        <Col className={`${styles.taskhead} me-1`} sm>
          Upcoming tasks <button className={`ms-1 ${styles.taskCounter}`}>{upcomingTasks.length}</button>
          <div className={styles.addtask}>
            <button className={styles.plussign}>+</button>
          </div>
        </Col>
        <Col className={`${styles.taskhead} me-1`} sm>
          Completed tasks <button className={`ms-1 ${styles.taskCounter}`}>{completedTasks.length}</button>
          <div className={styles.addtask}>
            <button className={styles.plussign}>+</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">{renderTasks(todayTasks)}</Col>
      <Col className="mt-3">{renderTasks(upcomingTasks)}</Col>
      <Col className="mt-3">{renderTasks(completedTasks)}</Col>
      </Row>
    </Container>
      </div>
    </Layout>
  );
};
export default GroupDetails;
