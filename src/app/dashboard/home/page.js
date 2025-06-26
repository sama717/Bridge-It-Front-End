// /src/app/components/dashboardComponents/pages/Home.js
import Layout from '../../components/dashboardComponents/Layout';
import TaskDoneChart from '../../components/dashboardComponents/Graph'
const Home = () => {
  return (
    <Layout>
      {/* <h1>Home Page</h1> */}
      <TaskDoneChart />
    </Layout>
  );
};

export default Home;