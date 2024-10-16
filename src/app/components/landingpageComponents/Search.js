"use client";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Searchinput.css'

export default function Search() {
  const SearchStyle = { 
    background: 'linear-gradient(90deg, #002572, #007bff)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text', 
    color: 'transparent',
    fontSize: "15px",
  }

  const HeadingStyle = {
    fontSize: "22px",
    fontWeight: "bold",
  }

  return (
    <div className="mt-5">
      <p className="text-center" style={SearchStyle}>
        ALL OF YOUR PROJECTS IN ONE PLACE
      </p>
      
      <div className="text-center">
        <p style={HeadingStyle}>
          Take Control Of Your Projects
          <img style={{ width: "20px", marginBottom: "20px" }} src="star.png" alt="star" />
        </p>
        
        <p className="fw-bold" style={{ marginTop: "-25px", fontSize: "22px" }}>
          Collaborate Like Never Before
        </p>
        
        <div style={{ color: "#6F6C90", marginTop: "-15px", fontWeight: "bold" }}>
          <p style={{ fontSize: "13px" }}>The ultimate platform for students and supervisors to seamlessly manage, track,</p>
          <p style={{ marginTop: "-20px", fontSize: "13px" }}>and complete university projects—powered by AI and designed for success.</p>
        </div>

        <div className="search-container ">
          <div className="search-inner">
            <img src='searchicon.png' style={{width:"20px",height:"20px" ,marginLeft:"10px"}}/>
            <input type="text" placeholder="Search or jump to..." className="search-input" />
            <img src ="send.png" style={{width:"20px",height:"20px"}}/>
          </div>
        </div>
        <div className='mt-3'>
        <img src ='Search.png' style={{width:"100%",height:"600px"}}/>
        </div>
        
      </div>
    </div>
  );
}
