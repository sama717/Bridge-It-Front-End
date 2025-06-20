"use client";
import { usePathname } from "next/navigation";
import Layout from "../../../../../components/dashboardComponents/Layout";
import './challenge.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import '../challenges/challenge.css';
import { Card, Row, Col, Dropdown, Container } from 'react-bootstrap';
export default function Challenges() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const taskId = parseInt(segments[3]);
  const [token, setToken] = useState("");
  const [show, setShow] = useState(false);
  const [challengeTitle, setChallengeTitle] = useState("");
  const [challengeSolution, setChallengeSolution] = useState("");
  const [challenges, setChallenges] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedChallengeId, setSelectedChallengeId] = useState(null);
  const [editChallenge, setEditChallenge] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [expandedChallengeIds, setExpandedChallengeIds] = useState([]); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const fetchChallenges = async () => {
    try {
      const res = await fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/task/challenges/${taskId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      const data = await res.json();
      setChallenges(data.challenges || []);
    } catch (error) {
      console.error("Failed to fetch challenges", error);
    }
  };

  useEffect(() => {
    if (token) fetchChallenges();
  }, [token]);

  const handleCreateChallenge = async () => {
    if (!challengeTitle || !challengeSolution || !taskId) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch('https://bridge-it-backend-main-tfxagd.laravel.cloud/api/task/challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          task_id: taskId,
          challenge_title: challengeTitle,
          challenge_solution: challengeSolution
        })
      });
      const data = await response.json();
      if (response.ok) {
        setChallengeTitle('');
        setChallengeSolution('');
        handleClose();
        fetchChallenges();
      } else {
        alert('Error: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error("Error creating challenge", err);
      alert("Something went wrong.");
    }
  };

  const handleDeleteChallenge = async () => {
    try {
      await fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/task/challenge/${selectedChallengeId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': "application/json",
        },
      });
      setShowDeleteModal(false);
      setSelectedChallengeId(null);
      fetchChallenges();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleUpdateChallenge = async () => {
    try {
      await fetch(`https://bridge-it-backend-main-tfxagd.laravel.cloud/api/task/challenge/${editChallenge.id}/edit`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challenge_title: editChallenge.title,
          challenge_solution: editChallenge.solution,
        }),
      });
      setShowEditModal(false);
      fetchChallenges();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const toggleChallenge = (id) => {
    setExpandedChallengeIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
               <div className="buttonss mt-4">
           <a href={`/dashboard/workspace/${taskId}/Task`}>
            <button className="overview-btn me-3">
               <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#4B5563" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>
               Overview
            </button>
           </a>
          <button className="challenge-btn"><svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#FFFFFF" d="M12 3a1 1 0 0 1 1 1v6.268l5.428-3.134a1 1 0 0 1 1 1.732L14 12l5.428 3.134a1 1 0 1 1-1 1.732L13 13.732V20a1 1 0 1 1-2 0v-6.268l-5.428 3.134a1 1 0 1 1-1-1.732L10 12L4.572 8.866a1 1 0 0 1 1-1.732L11 10.268V4a1 1 0 0 1 1-1"/></g></svg>Challenges</button>
           <button style={{backgroundColor: "white",border: "1px #004EA0 solid",color:"#004EA0 ",borderRadius: "5px",padding: "10px", position: "absolute",top: "23%",right: "3%",fontSize: "12px"}} onClick={handleShow}>+ New Challenge</button>
         </div>
              <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
           <Modal.Header closeButton className="modal-header">
             <Modal.Title className="modalTitle">New Challenge</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Form>
               <Form.Group className="mb-2">
                 <Form.Label className="modalLabel">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter challenge title"
                  value={challengeTitle}
                  onChange={(e) => setChallengeTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="modalLabel">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please describe your challenge details"
                  value={challengeSolution}
                  onChange={(e) => setChallengeSolution(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="buttons">
            <button className="cancleTask" onClick={handleClose}>Cancel</button>
            <button className="addTask" onClick={handleCreateChallenge}>Add</button>
          </Modal.Footer>
        </Modal>
     <Container className="mt-4">
  {challenges.length === 0 ? (
    <p>No challenges yet.</p>
  ) : (
    <Row>
      {challenges.map((challenge) => {
        const isExpanded = expandedChallengeIds.includes(challenge.id);
        return (
          <Col key={challenge.id} md={4} className="mb-4">
            <Card className=" shadow-sm position-relative">
              <div className="position-absolute top-0 end-0 p-2">
                <Dropdown align="end">
                 <Dropdown.Toggle variant="light" bsPrefix="btn"
           style={{ border: 'none', padding: '0', boxShadow: 'none', background: 'transparent' }}>
                 <svg width="30" height="30" fill="#56555C" viewBox="0 0 48 24">
                  <circle cx="8" cy="12" r="2" />
                  <circle cx="24" cy="12" r="2" />
                  <circle cx="40" cy="12" r="2" />
                    </svg>
            </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setEditChallenge({
                          id: challenge.id,
                          title: challenge.title,
                          solution: challenge.solution?.contents
                        });
                        setShowEditModal(true);
                      }}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setSelectedChallengeId(challenge.id);
                        setShowDeleteModal(true);
                      }}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Card.Body>
                <Card.Title style={{ color: "#1E528A" }}>{challenge.title}</Card.Title>
                {isExpanded && (
                  <Card.Text style={{ color: "#374151" }}>
                    {challenge.solution?.contents}
                  </Card.Text>
                )}
                <Card.Text>
                  <button className="mt-3 mb-3" style={{border: "1px solid #004EA0",width: "95%",backgroundColor: "white",padding: "5px",borderRadius: "8px", color: "#004EA0",display: "flex",  justifyContent:"center", alignItems: "center", }}>
                  <div> <span> <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#004EA0" d="M17 15.635q-.961 0-1.634-.673q-.674-.673-.674-1.635t.674-1.635T17 11.02t1.635.673q.673.674.673 1.635t-.674 1.635t-1.634.673m0-1q.54 0 .924-.384t.384-.924t-.384-.924T17 12.02t-.924.384t-.384.924t.384.924t.924.384m-4.5 6.903q-.343 0-.575-.232t-.233-.575v-1.4q0-.344.164-.647q.164-.302.46-.482q.684-.418 1.186-.586t1.296-.304q.258-.045.5.011q.243.055.404.256L17 19.25l1.273-1.671q.162-.212.404-.262t.505-.005q.809.136 1.297.302q.489.167 1.2.588q.296.179.453.478t.176.631v1.42q0 .343-.233.575t-.575.232zm.167-1h4.056l-1.754-2.304q-.61.144-1.186.373q-.575.23-1.116.532zm4.61 0h4.03v-1.4q-.534-.307-1.11-.524q-.576-.216-1.185-.36zM5 19V5v3.656v-.406zm.625 1q-.68 0-1.153-.475Q4 19.052 4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v3.693q-.227-.212-.461-.383T19 8.662V5.616q0-.27-.173-.443T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173h3.342q-.017.083-.026.166q-.009.082-.009.165V20zM8 8.73h6.923q.362-.21.762-.307q.4-.096.815-.134V8.23q0-.213-.144-.356T16 7.73H8q-.213 0-.356.144t-.144.357t.144.356T8 8.73m0 3.77h4.02q.038-.275.102-.516q.065-.24.15-.484H8q-.213 0-.356.144t-.144.357t.144.356T8 12.5m0 3.77h2.295q.257-.207.531-.391t.56-.315V15.5q0-.092-.048-.161t-.182-.07H8q-.213 0-.356.144q-.144.144-.144.357t.144.356t.356.143"/></svg>Doctor Notes</span> </div> 
                  </button>
                  <div onClick={() => toggleChallenge(challenge.id)} style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <svg xmlns="http://www.w3.org/2000/svg" width="30"  height="30" fill="#FFC107" viewBox="0 0 24 24"
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s",}}>
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg></div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  )}
</Container>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Body className="text-center">
          <p>Are you sure you want to delete this challenge?</p>
          <div className="mt-3 d-flex justify-content-center">
            <button onClick={handleDeleteChallenge} className="btn btn-danger me-2">Delete</button>
            <button onClick={() => setShowDeleteModal(false)} className="btn btn-secondary">Cancel</button>
          </div>
        </Modal.Body>
      </Modal>
       <Modal  show={showDeleteModal} onHide={() => setShowDeleteModal(false)}centered backdrop="static" keyboard={false} contentClassName="custom-delete-modal"  dialogClassName="custom-delete-dialog">
      <Modal.Body className="text-center">
      <p>Are you sure you want to delete this challenge?</p>
    <div className="mt-3 d-flex justify-content-center">
      <button onClick={handleDeleteChallenge}
        style={{backgroundColor: '#004EA0',color: '#FFFFFF',border: 'none',marginRight: '1rem',padding:"8px",borderRadius:"8px"}}>
        Delete
      </button>
      <button onClick={() => setShowDeleteModal(false)}
        style={{backgroundColor: '#F5FAFF',color: '#004EA0',border: 'none',borderRadius:"8px",padding:"8px"}}>
        Cancel
      </button>
    </div>
  </Modal.Body>
</Modal>

<Modal show={showEditModal} onHide={() => setShowEditModal(false)} backdrop="static" animation={false}>
  <Modal.Header closeButton className="modal-header">
    <Modal.Title className="modalTitle">Edit Challenge</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-2">
        <Form.Label className="modalLabel">Title</Form.Label>
        <Form.Control type="text" placeholder="Enter challenge title"
          value={editChallenge?.title || ''}
          onChange={(e) => setEditChallenge({ ...editChallenge, title: e.target.value })}/>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label className="modalLabel">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Please describe your challenge details"
          value={editChallenge?.solution || ''}
          onChange={(e) => setEditChallenge({ ...editChallenge, solution: e.target.value })}
        />
      </Form.Group>
    </Form>
  </Modal.Body>

  <Modal.Footer className="buttons">
    <button className="cancleTask" onClick={() => setShowEditModal(false)}>
      Cancel
    </button>
    <button className="addTask" onClick={handleUpdateChallenge}>
      Save
    </button>
  </Modal.Footer>
  </Modal>
    </Layout>
  );
}
