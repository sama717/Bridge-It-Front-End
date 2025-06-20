"use client";
import { Row, Col } from 'react-bootstrap';
import WorkspaceCard from './workspaceCard';

const WorkspaceGrid = ({ workspaces }) => (
  <Row>
    {workspaces.map((workspace) => (
      <Col key={workspace.id} md={4}>
        <WorkspaceCard {...workspace} />
      </Col>
      
    ))}
  </Row>
);

export default WorkspaceGrid;
