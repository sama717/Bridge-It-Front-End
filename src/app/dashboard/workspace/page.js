// /src/app/dashboard/workspace/page.js

import Layout from '../../components/dashboardComponents/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/workspace.css';

const Workspace = () => {
  return (
    <Layout>
      <div className='workspace-container'>
        <div>
          <h1>Workspaces (XX)</h1>
          <div className='my-5'>
            <button className='btn btn-primary me-3'>
              <i className="bi bi-clock-history me-2"></i>In Progress
            </button>
            <button className='btn btn-secondary'>
              <i className="bi bi-check2-circle me-2"></i>Done
            </button>
          </div>
          <div className='workspace-buttons'>
            <button className='btn btn-outline-primary'>
              <i className="fa-solid fa-plus me-2"></i>New Workspace
            </button>
            <div className='edit-search'>
              <button className='btn btn-secondary'>
                <i className="bi bi-toggles2 me-2"></i>Filter
              </button>
              <button className='btn btn-secondary'>
                <i className="bi bi-arrow-down-up me-2"></i>Sort
              </button>
            </div>
          </div>
          <div className='workspace-cards my-5 container d-flex flex-wrap'>
            <div className="card">
              <div className="img-container">
                <button className='btn more-btn'><i className="bi bi-three-dots"></i></button>
                <span>CATEGORY</span>
                <img src="/card-img.jpeg" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="card-title">Title</h5>
                  <p className="card-title text-secondary">Last edit date</p>
                </div>
                <div className='card-description mt-2'>
                  <p className="card-text text-secondary">8 Team Members</p>
                  <img src='/members-photo.png' alt="Team members"/>
                </div>
              </div>
              <div className='card-buttons'>
                <button className='btn btn-outline-secondary btn-1'><i className="bi bi-folder"></i></button>
                <button className='btn btn-outline-secondary btn-1'><i className="bi bi-chat-dots"></i></button>
                <button className='btn btn-outline-secondary btn-2'>
                  <i className="fa-solid fa-spinner "></i>
                  <div className='progress-btn'>
                    <span>24% Complete</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                    <div className="progress-bar" style={{ width: '25%' , height: '5px', backgroundColor: '#3B95F6'}}></div>
                  </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="img-container">
                <button className='btn more-btn'><i className="bi bi-three-dots"></i></button>
                <span>CATEGORY</span>
                <img src="/card-img.jpeg" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <div className="card-text d-flex justify-content-between">
                  <h5 className="card-title">Title</h5>
                  <p className="card-title text-secondary">Last edit date</p>
                </div>
                <div className='card-description mt-2'>
                  <p className="card-text text-secondary">8 Team Members</p>
                  <img src='/members-photo.png' alt="Team members"/>
                </div>
              </div>
              <div className='card-buttons'>
                <button className='btn btn-outline-secondary btn-1'><i className="bi bi-folder"></i></button>
                <button className='btn btn-outline-secondary btn-1'><i className="bi bi-chat-dots"></i></button>
                <button className='btn btn-outline-secondary btn-2'>
                  <i className="fa-solid fa-spinner "></i>
                  <div className='progress-btn'>
                    <span>24% Complete</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                    <div className="progress-bar" style={{ width: '25%' , height: '5px', backgroundColor: '#3B95F6'}}></div>
                  </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination-container d-flex justify-content-center">
  <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&lt;</span>
        </a>
      </li>
      <li className="page-item active"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item disabled"><span className="page-link">...</span></li>
      <li className="page-item"><a className="page-link" href="#">10</a></li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&gt;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</div>
    </Layout>
  );
};

export default Workspace;
