
"use client";
import Sidebar from '../components/workspaceComponents/sidebar';
import Header from '../components/workspaceComponents/workspaceHeadre';
import WorkspaceTabs from '../components/workspaceComponents/workspacetaps';
import WorkspaceGrid from '../components/workspaceComponents/workspaceGrid';
import CustomPagination from '../components/workspaceComponents/pagination';
import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';

export default function WorkspacesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const workspaces = [
    { id: 1,src:"card1.png", title: 'Workspace 1', lastEditDate: 'Yesterday', teamMembers: [{ name: 'Alice', avatar: '/avatar1.png' }], progress: 24 },
    { id: 2, src:"card2.png",title: 'Workspace 2', lastEditDate: '2 days ago', teamMembers: [{ name: 'Bob', avatar: '/avatar2.png' }], progress: 50 },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <Container fluid className="p-3">
        <Header />
        <h4 className='mt-3'>Work Spaces (XX)</h4>
        <WorkspaceTabs  />
        <Link href="./AddNewWorkspace">
        <Button  className="mb-3  new"  style={{backgroundColor: "white",boxShadow: "none",transition: "none",
  }}>+ New Workspace</Button></Link>
       
        <WorkspaceGrid workspaces={workspaces} />
        <CustomPagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
      </Container>
    </div>
  );
}
