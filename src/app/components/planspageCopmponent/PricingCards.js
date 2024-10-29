/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/PricingCard.css'
export default function PricingCards() {
    return (
        <div className="pricing-cards">
        <Container fluid="md">
        <Row >
          <Col  className=" mb-3 ">
            <div className="card golden">
                <h2>
                <img className='goldenicon' src='goldenicon.png'/>   Golden</h2>
                <p> <del>$199</del> $99 / monthly</p>
                <p style={{fontSize:"12px"}}> For individuals </p>
                <h6>What's included</h6>
                <ul className='plan'>
                    <li>Access to property requests done by people who are seeking properties.</li>
                    <li>100 listing slots, that can be adjusted and replaced anytime (full control).</li>
                    <li>Analytics: Track clicks and saves for each listing. </li>
                    <li>Community Engagement: Share posts and insights with TrueDar’s real estate community to grow your client base 
                     and personal brand. </li>
                    <li>Work Management Tool: Manage appointments, tasks, and client relationships.</li>
                    <li>Access to property owners’ requests to market their properties.</li>
                </ul>
                <button className='startbtn bluebtn'>Get Started</button>
            </div> 
            </Col>
          <Col>  <div className="card card2 platinum blue  position-relative">
            <img className='popularIcon' src='popularIcon.png'/>
                <h2 className='text-white'>  <img className='goldenicon ' src='paltuimicon.png'/> Platinum  <button className='discount'>25% Discount</button></h2>
                <p className='text-white'> <del>$199</del> $99 / monthly</p> 
                <p style={{fontSize:"12px",color:"#D9DBE9"}}>  For small/medium companies  </p>
                <h6 className='text-white'>What's included</h6>
                <ul className='plan'>
                    <li>Access to property requests done by people who are seeking properties.</li>
                    <li>250 listing slots, that can be adjusted and replaced anytime (full control).</li>
                    <li> Analytics: Track clicks and saves for each listing.</li>
                    <li>Community Engagement: Share posts and insights with TrueDar’s real estate community to grow your client base
                    and personal brand.</li>
                    <li>Work Management Tool: Manage appointments, tasks, and client relationships.</li>
                    <li>Access to property owners’ requests to market their properties.</li>
                    <li>20 Additional Users: Expand your team's presence within one account.</li>
                    <li>Manager Role: Supervise and manage employee accounts efficiently.</li>
                </ul>
                <button className='startbtn white'  >Get Started</button>
            </div></Col>
          <Col> <div className="card elite ">
                <h2> <img className='goldenicon' src='eliteicon.png'/> Elite</h2>
                <p><del>$199</del> $399 / monthly</p>
                <p style={{fontSize:"12px",color:"#374151"}}>For large companies </p>
                <h6 >What's included</h6>
                <ul className='plan'>
                    <li>Access to property requests done by people who are seeking properties.</li>
                    <li>Unlimited listing slots, that can be adjusted and replaced 
                    anytime (full control).</li>
                    <li>Analytics: Track clicks and saves for each listing. </li>
                    <li>Community Engagement: Share posts and insights with TrueDar’s real estate community to grow your client base 
                    and personal brand. </li>
                    <li>Work Management Tool: Manage appointments, tasks, and client relationships.</li>
                    <li>Access to property owners’ requests to market their properties.</li>
                    <li>Unlimited Additional Users: Expand your team's presence within one account.</li>
                    <li>Manager Role: Supervise and manage employee accounts 
                    efficiently.</li>
                </ul>
                <button  className='startbtn bluebtn' >Get Started</button>
            </div></Col>
        </Row>
      </Container>    
        </div>
    );
}
