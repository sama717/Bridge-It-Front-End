"ue client";
import {  Button } from 'react-bootstrap';
import './css/workspacetaps.css'
const WorkspaceTabs =() => (
   <div className='mb-4'>
    <Button className='inporgress me-4 '>In Progress</Button>
    <Button className='done'style={{backgroundColor: "#F5FAFF",boxShadow: "none",transition: "none"}} >Done</Button>
    </div>
);

export default WorkspaceTabs;
