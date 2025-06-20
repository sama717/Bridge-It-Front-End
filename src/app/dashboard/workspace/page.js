/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/dashboardComponents/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/workspace.css";
import Link from "next/link"; 

const Workspace = () => {
  const [groups, setGroups] = useState([]);
  const [sortedGroups, setSortedGroups] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;  
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) return;
    fetch("https://bridge-it-backend-main-tfxagd.laravel.cloud/api/groups", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setGroups(data.data);
          setSortedGroups(data.data);
        }
      })
      .catch((error) => console.error("Error fetching groups:", error));
  }, [token]);

  const handleSort = () => {
    const sorted = [...sortedGroups].sort((a, b) =>
      isAscending
        ? a.group.title.localeCompare(b.group.title)
        : b.group.title.localeCompare(a.group.title)
    );
    setSortedGroups(sorted);
    setIsAscending(!isAscending);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGroups = sortedGroups.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(groups.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className="workspace-container">
        <div className="mb-3" style={{ color: "#374151", fontSize: "32px" }}>
          Work Spaces ({groups.length})
        </div>

        <div className="d-flex gap-2 mb-5">
          <button className="btn btn-primary">
            <i className="bi bi-clock-history me-2"></i>In Progress
          </button>
          <button className="btn btn-secondary">
            <i className="bi bi-check2-circle me-2"></i>Done
          </button>
        </div>

        <div className="workspace-buttons">
          <Link href="/dashboard/workspace/creategroup">
            <button className="btn btn-outline-primary">
              <i className="fa-solid fa-plus me-2"></i>New Workspace
            </button>
          </Link>

          <div className='edit-search'>
            <button className='btn btn-secondary'>
              <i className="bi bi-toggles2 me-2"></i>Filter
            </button>
            <button className='btn btn-secondary' onClick={handleSort}>
              <i className={`bi bi-arrow-${isAscending ? "down" : "up"}-up me-2`}></i>Sort
            </button>
          </div>
        </div>

        <div className="workspace-cards my-5 container d-flex flex-wrap">
          {currentGroups.map(({ group }) => (
            <div key={group.id} className="card">
              <div className="img-container">
                <button className="btn more-btn">
                  <i className="bi bi-three-dots"></i>
                </button>
                <span>{group.category_id || "CATEGORY"}</span>
                <a href={`/dashboard/workspace/${group.id}`} >
                  <a className="dynamic-img" style={{ backgroundColor: "#E5E7EB" }}>
                    <div style={{ color: "#9CA3AF" }}>
                      {group.title.substring(0, 2).toUpperCase()}
                    </div>
                  </a>
                </a>
              </div>

              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="card-title">{group.title}</h5>
                  <p className="card-title text-secondary">
                    {new Date(group.deadline).toLocaleDateString()}
                  </p>
                </div>

                <div className="card-description">
                  <p className="card-text text-secondary">{group.users.length} Team Members</p>
                  <img src="/members-photo.png" alt="Team members" />
                </div>
              </div>

              <div className='card-buttons'>
                <button className='btn btn-outline-secondary btn-1'><i className="bi bi-folder"></i></button>
                <button className='btn btn-outline-secondary btn-1'><i className="bi bi-chat-dots"></i></button>
                <button className='btn btn-outline-secondary btn-2'>
                  <i className="fa-solid fa-spinner"></i>
                  <div className='progress-btn'>
                    <span>24% Complete</span>
                    <div className="progress mb-2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
                      <div className="progress-bar" style={{ width: '25%', height: '5px', backgroundColor: '#3B95F6' }}></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-container d-flex justify-content-center">
          {totalPages > 1 && (
            <nav aria-label="Page navigation">
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    <a className="page-link" href="#">
                      {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Workspace;
