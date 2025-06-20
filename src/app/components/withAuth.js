/* eslint-disable react/display-name */

"use client";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginSuccess } from '../../store/authSlice'; 
import Spinner from 'react-bootstrap/Spinner';
const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token); 
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
      const localToken = localStorage.getItem('token');
      if (localToken && !token) {
        dispatch(loginSuccess({ token: localToken }));  
      }
      if (!localToken) {
        router.push('/login');
      } else {
        setIsCheckingAuth(false);  
      }
    }, [token, router, dispatch]);

    if (isCheckingAuth) return <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}} ><Spinner animation="border" /></div>;  

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

/* eslint-disable react/display-name */
// "use client";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { requestNotificationPermission } from "../../lib/notificationService"; // Import notification logic

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const router = useRouter();
//     const token = useSelector((state) => state.auth.token);

//     useEffect(() => {
//       if (!token) {
//         router.push("/login");
//       } else {
//         // Request notification permission and get FCM token
//         requestNotificationPermission();
//       }
//     }, [token, router]);

//     return token ? <WrappedComponent {...props} /> : null;
//   };
// };

// export default withAuth;

