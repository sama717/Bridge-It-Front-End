
"use client";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token); 

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [token, router]);
    return token ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
