// /* eslint-disable @next/next/no-img-element */
// "use client";
// import './css/page.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useRouter } from "next/navigation";
// export default function Invitaion(){
//     const [error, setError] = useState(null);
//     const [group, setGroup] = useState(null);
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//   const groupid = localStorage.getItem('groupId');
//   const router = useRouter();
//   useEffect(() => {
    
//       fetch(`https://api.bridgeit.site/api/groups/${groupid}`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.status) {
//             setGroup(data.group);
//             console.log(group);
//             const userName = data.group.users[0].name;
//             localStorage.setItem('userName', userName);
//           } else {
//             setError("Failed to load group details.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching group details:", error);
//           setError("An error occurred while fetching group details.");
//         });
//     }, [token]);

//     return(
// <div className='container'>
//     <div className='mt-4 mb-2 text-dark'>Work Space Invitation Link
//     </div>
//     <div className='div'>
//     <div className='workspace-cards'>
//     <div className="card">
//               <div className="img-container">
//                 <img src="/card-img.jpeg" className="card-img-top" alt="..." />
//               </div>
//               <div className="card-body">
//                 <div className="card-text d-flex justify-content-between">
//                   <h5 className="card-title">title</h5>
//                   <p className="card-title text-secondary">Last edit date</p>
//                 </div>
//                 <div className='card-description '>
//                   <p className="card-text text-secondary">8 Team Members</p>
//                   <img src='/members-photo.png' alt="Team members"/>
//                 </div>
//               </div>
//               <div className='card-buttons'>
//                 <button className='btn btn-outline-secondary btn-1'><i className="bi bi-folder"></i></button>
//                 <button className='btn btn-outline-secondary btn-1'><i className="bi bi-chat-dots"></i></button>
//                 <button className='btn btn-outline-secondary btn-2'>
//                 <i className="fa-solid fa-spinner"></i>
//                   <div className='progress-btn '>
//                     <span>24% Complete</span>
//                     <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px',width:"300px"}}>
//                     <div className="progress-bar" style={{ width: '25%' , height: '5px', backgroundColor: '#3B95F6'}}></div>
//                   </div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <div className='cont'>
//             <button className='cancel'>Cancel</button>
//             <button className='join'>Send join Request</button>
//             </div>
//             </div>
//             </div>
//             </div>
//     );
// }

/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import './css/page.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Invitaion() {
  const [error, setError] = useState(null);
  const [group, setGroup] = useState(null);
  
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const groupid = typeof window !== "undefined" ? localStorage.getItem('groupId') : null;
  
  const router = useRouter();

  useEffect(() => {
    if (!groupid || !token) return; 

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
          console.log(data.group);
          const userName = data.group.users[0]?.name; 
          localStorage.setItem('userName', userName || '');
        } else {
          setError("Failed to load group details.");
        }
      })
      .catch((error) => {
        console.error("Error fetching group details:", error);
        setError("An error occurred while fetching group details.");
      });
  }, [token, groupid]);

  return (
    <div className='container'>
      <div className='mt-4 mb-2 text-dark'>Work Space Invitation Link</div>
      <div className='div'>
        <div className='workspace-cards'>
          <div className="card">
            {/* <div className="img-container">
              <img src="/card-img.jpeg" className="card-img-top" alt="..." />
            </div> */}
             <div className="img-container">
                <div className="dynamic-img" style={{ backgroundColor: "#E5E7EB" }} onClick={() => handleGroupClick(group.id)}>
                  <div style={{ color: "#9CA3AF" }}>{ group ? group.title.substring(0, 2).toUpperCase():"Loading..."}</div>
                </div>
              </div>
            <div className="card-body">
              <div className="card-text d-flex justify-content-between">
                <h5 className="card-title">{group ? group.title : "Loading..."}</h5>
                <p className="card-title text-secondary">{group?.deadline ? new Date(group.deadline).toLocaleDateString() : "No deadline"}
                </p>
              </div>
              <div className='card-description '>
                <p className="card-text text-secondary">{group?.users?.length ?? 0} Team Members
                </p>
                <img src='/members-photo.png' alt="Team members"/>
              </div>
            </div>
            <div className='card-buttons'>
              <button className='btn btn-outline-secondary btn-1'><i className="bi bi-folder"></i></button>
              <button className='btn btn-outline-secondary btn-1'><i className="bi bi-chat-dots"></i></button>
              <button className='btn btn-outline-secondary btn-2'>
                <i className="fa-solid fa-spinner"></i>
                <div className='progress-btn '>
                  <span>24% Complete</span>
                  <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px',width:"300px"}}>
                    <div className="progress-bar" style={{ width: '25%' , height: '5px', backgroundColor: '#3B95F6'}}></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className='cont'>
            <button className='cancel'>Cancel</button>
            <button className='join'>Send join Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}
