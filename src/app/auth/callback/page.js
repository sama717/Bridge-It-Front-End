
// "use client";
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const AuthCallback = () => {
//   const router = useRouter();
//   useEffect(() => {
//     const handleAuth = async () => {
//       const urlParams = new URLSearchParams(window.location.search);
//       const token = urlParams.get('token');

//       if (token) {
//         localStorage.setItem('token', token);

//         const response = await fetch('http://127.0.0.1:8000/api/credentials/fetch/', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           console.error('Failed to fetch user data:', response.statusText);
//           return;
//         }

//         const data = await response.json();
//         console.log('Response Data:', data);

//         if (data.data) {
//           const user = data.data.user;
//           console.log('User Data:', user);
//           console.log(user.user_id);
//           if (!user.user_id) {
            
//             router.push('/handlePlatformSignup'); 
//           } else {
//             localStorage.setItem('user', JSON.stringify(user));
//             router.push('/'); 
//           }
//         } else {
//           console.error('User data is undefined');
//         }

//       } else {
//         console.error('No token found in the URL');
//       }
//     };

//     handleAuth();
//   }, [router]);

//   return <div>Loading...</div>; 
// };

// export default AuthCallback;

"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code'); 

      if (code) {
        

        router.push('/handlePlatformSignup');
      } else {
        console.error('No authorization code found in the URL');
      }
    };

    handleAuth(); 
  }, [router]);

  return <div>Loading...</div>; // Show loading while processing
};

export default AuthCallback;






// "use client";
// import { useEffect } from 'react';

// const AuthCallbackPage = () => {
//   useEffect(() => {
    
//     if (window.location.pathname === '/auth/callback') {
//       handleAuthCallback();
//     }
//   }, []); 

//   const handleAuthCallback = async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');

//     if (!token) {
//       console.error('No token found in the URL');
//       return;
//     }

//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/credentials/fetch/', {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         console.error('Failed to fetch user data:', response.statusText);
//         return;
//       }

//       const data = await response.json();
//       console.log('Response Data:', data);

//       if (data.data) {
//         const user = data.data.user;
//         localStorage.setItem('user', JSON.stringify(user));
//         window.location.href = '/'; 
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   return <div>Loading...</div>;
// };

// export default AuthCallbackPage;
