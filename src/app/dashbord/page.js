
"use client";
import withAuth from '../components/withAuth';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
};

export default withAuth(Dashboard);
