/* eslint-disable @next/next/no-img-element */
import Button from 'react-bootstrap/Button';
import  './Header.css';
export default function FileHeader(){
    return(
        <div className="filecont">
    <div class="button-container">
    <button className='allbtn'>
        <img className='me-2' src="/signfile.png" alt='file'/>
        All Work Spaces</button>
        <button className=' workspace'>
        <span className="circle me-2"></span>
        Work Space Name</button>
        <button className=' workspace'>
        <span className="circle me-2"></span>
        Work Space Name</button>
        <button className=' workspace'>
        <span className="circle me-2"></span>
        Work Space Name</button>
        </div>
        </div>
        
    );
}