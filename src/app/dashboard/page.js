// /src/app/dashboard/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '../components/withAuth'; // Adjust the import if needed

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/home');
  }, [router]);

  return null; 
};

export default withAuth(Dashboard);
