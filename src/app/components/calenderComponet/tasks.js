// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Dropdown from 'react-bootstrap/Dropdown';
// import React, { useState } from 'react';
// import './tasks.css'
// function TASK() {
//      const [selected, setSelected] = useState('To Do');

//   const handleSelect = (eventKey) => {
//     setSelected(eventKey);
//   };
//   return (
//     <Container className='mt-4'>
//       <Row >
//         <Col  className='taskhead me-2'sm>  Today’s Tasks <button className='ms-2 taskCounter'>3</button> <div className='addtask'><button className='plussign'>+</button></div></Col>
//         <Col  className='taskhead me-2'sm>  Upcoming tasks  <button className='ms-2 taskCounter'>3</button> <div className='addtask'><button className='plussign' >+</button></div></Col>
//         <Col className='taskhead me-2'sm>  Completed tasks <button className='ms-2 taskCounter'>3</button> <div className='addtask'><button className='plussign' >+</button></div></Col>
//       </Row>
//       <Row className='mt-3'>
//         <Col sm> <Card style={{ width: '19rem' }}>
//       <Card.Body>
//         <Card.Title className='tasktitle'> <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#EB5757" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/></svg>
//         Project X dashboard UI design</Card.Title>
//       </Card.Body>
//     </Card> </Col>
//         <Col sm> <Card style={{ width: '19rem' }}>
//       <Card.Body>
//         <Card.Title className='tasktitle'> <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#F2994A" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/></svg>
//          Project X dashboard UI prototype</Card.Title>
//         <Dropdown onSelect={handleSelect} className='mt-2'>
//       <Dropdown.Toggle className='toggleongoin no-hover' id="dropdown-basic">
//         {selected}
//       </Dropdown.Toggle>

//       <Dropdown.Menu className='no-hover'>
//         <Dropdown.Item  eventKey="Ongoing">Ongoing</Dropdown.Item>
//         <Dropdown.Item eventKey="To Do">To Do</Dropdown.Item>
//         <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     <Col className='mt-3'>
//      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#FFA726" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"/></svg>
//      <span className='Deadline ms-1'>Deadline</span>
//     </Col>
   

//       </Card.Body>
//     </Card></Col>
//         <Col sm><Card style={{ width: '19rem' }}>
//       <Card.Body>
//         <Card.Title className='tasktitle '> <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#219653" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/></svg>
//             Project X dashboard UI prototype</Card.Title>
        
//       </Card.Body>
//     </Card></Col>
//       </Row>
//     </Container>
//   );
// }

// export default TASK;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import styles from './tasks.module.css';

function TASK() {
  const [selected, setSelected] = useState('To Do');

  const handleSelect = (eventKey) => {
    setSelected(eventKey);
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col className={`${styles.taskhead} me-2`} sm>
          Today’s Tasks <button className={`ms-2 ${styles.taskCounter}`}>3</button>
          <div className={styles.addtask}>
            <button className={styles.plussign}>+</button>
          </div>
        </Col>
        <Col className={`${styles.taskhead} me-2`} sm>
          Upcoming tasks <button className={`ms-2 ${styles.taskCounter}`}>3</button>
          <div className={styles.addtask}>
            <button className={styles.plussign}>+</button>
          </div>
        </Col>
        <Col className={`${styles.taskhead} me-2`} sm>
          Completed tasks <button className={`ms-2 ${styles.taskCounter}`}>3</button>
          <div className={styles.addtask}>
            <button className={styles.plussign}>+</button>
          </div>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col sm>
          <Card style={{ width: '19rem' }}>
            <Card.Body>
              <Card.Title className={styles.tasktitle}>
                <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#EB5757" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/>
                </svg>
                Project X dashboard UI design
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card style={{ width: '19rem' }}>
            <Card.Body>
              <Card.Title className={styles.tasktitle}>
                <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#F2994A" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/>
                </svg>
                Project X dashboard UI prototype
              </Card.Title>

              <Dropdown onSelect={handleSelect} className='mt-2'>
                <Dropdown.Toggle className={`${styles.toggleongoin} ${styles.noHover}`} id="dropdown-basic">
                  {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.noHover}>
                  <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                  <Dropdown.Item eventKey="To Do">To Do</Dropdown.Item>
                  <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Col className='mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#FFA726" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"/>
                </svg>
                <span className={`ms-1 ${styles.Deadline}`}>Deadline</span>
              </Col>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card style={{ width: '19rem' }}>
            <Card.Body>
              <Card.Title className={styles.tasktitle}>
                <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#219653" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"/>
                </svg>
                Project X dashboard UI prototype
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TASK;
