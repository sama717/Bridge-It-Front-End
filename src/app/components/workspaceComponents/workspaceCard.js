/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, ProgressBar } from 'react-bootstrap';

const WorkspaceCard = ({src ,title, lastEditDate, teamMembers, progress }) => (
  <Card className="mb-3" style={{ width: '15rem' }}>
    <Card.Img variant="top" src={src} style={{width:"100%",height:"200px"}} />
    <Card.Body >
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Last edit: {lastEditDate}
      </Card.Text>
      <div className="d-flex mb-2">
        {teamMembers.map((member, index) => (
          <img key={index} src={member.avatar} alt={member.name} width="30" height="30" className="me-1 rounded-circle" />
        ))}
      </div>
      <ProgressBar now={progress} label={`${progress}% complete`} />
    </Card.Body>
  </Card>
  
);

export default WorkspaceCard;
