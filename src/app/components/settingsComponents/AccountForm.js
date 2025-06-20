/* eslint-disable @next/next/no-img-element */
"use client";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../settingsComponents/AccountForm.css'
export default function AccountForm(){
    return(
      <div>
<Form>
  <Row>
    <Col>
    <div >
   <img  className='user_imagecontainer' src='/person.png' alt='user_image'/>
    </div>
    </Col>
  </Row>
      <Row>

        <Col>
        <Form.Label className='mt-3' >Name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Col>
        <Col>
        <Form.Label className='mt-3' >Email</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Label className='mt-3' >Phone Number</Form.Label>
      <Form.Control placeholder="Please enter your phone number" /></Col>
      </Row>
      <Row>
        <Col>
        <Form.Label className='mt-3' >Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="password"
      />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col> <Form.Label>Bio</Form.Label>
        <Form.Control as="textarea" rows={3} style={{resize:"none"}}/></Col>
      </Row>
      <Row className='mt-3 buttoncont'>
        
        <Col>
        <button className='accountSave' >Save</button>
        </Col>
        <Col>
        <button className='accountCancle' >Cancle</button>
        </Col>
      </Row>
    </Form>
      </div>
    );
}