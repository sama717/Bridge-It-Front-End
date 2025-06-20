
"use client";
import Layout from "../../../../components/dashboardComponents/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Tassk.css';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";

export default function Task() {
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 4).join("/");
  const [task, setTask] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    description: "",
    deadline_date: "",
    Urgency: "",
  });

  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
  useEffect(() => {
    const storedTask = localStorage.getItem("selectedTask");
    if (storedTask) {
      const parsedTask = JSON.parse(storedTask);
      setTask(parsedTask);
    }
  }, []);
  function formatDateWithSuffix(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const getSuffix = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    return `${day}${getSuffix(day)} ${month} ${year}`;
  }

  const getSvgColor = (status) => {
    if (status === "ToDo") return "#F2994A";
    if (status === "Ongoing") return "#EB5757";
    if (status === "Done") return "#219653";
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${task.group_id}/tasks/${task.id}`,
        {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.message) {
        setShowConfirm(false);
        router.push(`/dashboard/workspace/${task.group_id}`);
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleSaveUpdate = async () => {
    const payload = {
      title: updatedTask.title || task.title,
      description: updatedTask.description || task.description,
      deadline_date: updatedTask.deadline_date || task.deadline_date,
      Urgency: updatedTask.Urgency || task.Urgency,
      assigned_to: task.assigned_to.id,
    };

    try {
      const res = await fetch(
        `https://bridge-it-backend-main-tfxagd.laravel.cloud/api/${task.group_id}/tasks/${task.id}`,
        {
          method: "PUT",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (data.task) {
        setTask(data.task);
        localStorage.setItem("selectedTask", JSON.stringify(data.task));
        setEditMode(false);
      } else {
        console.error("Update failed:", data);
      }
    } catch (err) {
      console.error("Request error:", err);
    }
  };

  if (!task) return <p>Loading task...</p>;

  return (
    <div>
      <Layout>
        <div className="buttons mt-4">
          <button className="overview-btn me-3 ms-4"><svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>Overview</button>
          <a href={`${basePath}/Task/challenges`}>
            <button className="challenge-btn"> <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#4B5563" d="M12 3a1 1 0 0 1 1 1v6.268l5.428-3.134a1 1 0 0 1 1 1.732L14 12l5.428 3.134a1 1 0 1 1-1 1.732L13 13.732V20a1 1 0 1 1-2 0v-6.268l-5.428 3.134a1 1 0 1 1-1-1.732L10 12L4.572 8.866a1 1 0 0 1 1-1.732L11 10.268V4a1 1 0 0 1 1-1"/></g></svg>Challenges</button>
          </a>
        </div>

        <div style={{ padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h6>
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path fill={getSvgColor(task.status)} d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/>
              </svg>
              {task.title}
            </h6>
            <span>{task.status}</span>
          </div>

          <div className="mt-4">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#FFA726" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"/>
                </svg>
                <small style={{ color: "#FFA726" }}>Deadline</small>
              </div>
              <span className="text-muted">{formatDateWithSuffix(task.deadline_date)}</span>
            </div>
          </div>
         <p className="mt-4" style={{color:"#4F4F4F",fontSize:"14px"}}>Describtion</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "1rem", gap: "1rem" }}>
           
            <p style={{ flexGrow: 1 ,color:"#999999"}}>{task.description}</p>
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", lineHeight: "1rem" }}
              >⋮</button>

              {showMenu && (
                <div style={{ border: "1px solid #ccc", borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", zIndex: 10 }}>
                  <button
                    onClick={() => {
                      setUpdatedTask({
                        title: task.title,
                        description: task.description,
                        deadline_date: task.deadline_date,
                        Urgency: task.Urgency,
                      });
                      setEditMode(true);
                      setShowMenu(false);
                    }}
                    style={{ display: "block", padding: "8px 12px", border: "none", background: "none", width: "100%", textAlign: "left", cursor: "pointer" }}
                  >Update</button>

                  <button
                    onClick={() => {
                      setShowConfirm(true);
                      setShowMenu(false);
                    }}
                    style={{ display: "block", padding: "8px 12px", border: "none", background: "none", width: "100%", textAlign: "left", cursor: "pointer", color: "red" }}
                  >Delete</button>
                </div>
              )}
            </div>
          </div>
              <div className="mt-5" style={{ color: "#636E72" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>Progress</span>
                <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>48%</span>
                  </div>
                  <div className="progress mt-2" style={{ height: "8px" }}>
                     <div className="progress-bar" role="progressbar" style={{ width: "48%", backgroundColor: "#219653" }} aria-valuenow={48} aria-valuemin="0" aria-valuemax="100"/>
                 </div>
           </div>
          <Modal show={editMode} onHide={() => setEditMode(false)} backdrop="static" animation={false}>
            <Modal.Header closeButton className="modal-header">
              <Modal.Title className="modalTitle">Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="modalLabel">Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your task title"
                    value={updatedTask.title}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                  />
                </Form.Group>
               <Form.Group className="mb-3 ">
                  <Form.Label className="modalLabel">Urgency Level</Form.Label>
                  <div className="d-flex align-items-center">
                    {["Urgent", "Normal", "Later"].map((level) => (
                      <Form.Check
                        key={level}
                        type="radio"
                        label={<span style={{ color: "#6B7280", fontWeight: "lighter" }}>{level}</span>}
                        name="urgencyEdit"
                        value={level}
                        checked={updatedTask.Urgency === level}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, Urgency: e.target.value })}
                        className="me-3"
                      />
                    ))}
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="modalLabel">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    className="area"
                    rows={3}
                    placeholder="Please describe your task details"
                    value={updatedTask.description}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="modalLabel">Deadline</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Choose your project deadline"
                    value={updatedTask.deadline_date}
                    onChange={(e) => setUpdatedTask({ ...updatedTask, deadline_date: e.target.value })}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="buttons">
              <button className="cancleTask" onClick={() => setEditMode(false)}>Cancel</button>
              <button className="addTask" onClick={handleSaveUpdate}>Save</button>
            </Modal.Footer>
          </Modal>
          {showConfirm && (
            <div className="modal-backdrop" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#00000080", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20 }}>
              <div style={{ background: "white", padding: "2rem", borderRadius: "8px", maxWidth: "400px", textAlign: "center" }}>
                <p>Are you sure you want to delete this task?</p>
                <div className="mt-3">
                  <button style={{ backgroundColor: '#004EA0', color: "#FFFFFF" }} className="btn me-3" onClick={handleDelete}>Delete</button>
                  <button style={{ backgroundColor: "#F5FAFF", color: "#004EA0" }} className="btn" onClick={() => setShowConfirm(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
