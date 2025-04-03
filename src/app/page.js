'use client';
import { useEffect, useState } from 'react';
import LandingPage from './landingpage/page';
import Dashboard from './dashboard/page';

export default function HomePage() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  if (token) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }

  return (
    <div>
      <LandingPage />
    </div>
  );
}

// "use client";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import LandingPage from './landingpage/page';

// export default function HomePage() {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       router.push('/dashboard');  
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div>
//       <LandingPage />
//     </div>
//   );
// }
// "use client";
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import LandingPage from './landingpage/page'; // Your landing page component

// export default function HomePage() {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       router.replace('/dashboard'); // Redirect to dashboard if token exists
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div>
//       <LandingPage /> {/* Show Landing Page if no token */}
//     </div>
//   );
// }

