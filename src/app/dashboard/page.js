
// "use client";
// import withAuth from '../components/withAuth';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Welcome to the Dashboard!</h1>
//     </div>
//   );
// };

// export default withAuth(Dashboard);
// /src/app/dashboard/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '../components/withAuth'; 

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/home');
  }, [router]);

  return null; 
};

export default withAuth(Dashboard);