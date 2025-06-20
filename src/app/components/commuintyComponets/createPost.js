/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function CreatePostModal({ onClose }) {
    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <button onClick={onClose} style={closeButtonStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94301 3.94992C4.53098 3.36459 5.48415 3.36471 6.07197 3.95018L11.9613 9.81196L17.858 3.93952C18.4456 3.35387 19.3988 3.35344 19.987 3.93857C20.5751 4.5237 20.5755 5.47281 19.9879 6.05847L14.09 11.9321L20.0612 17.9412C20.649 18.5266 20.6489 19.4758 20.0609 20.0611C19.4729 20.6464 18.5198 20.6463 17.9319 20.0608L11.962 14.053L6.12208 20.0152C5.53445 20.6009 4.58128 20.6013 3.99312 20.0162C3.40496 19.4311 3.40453 18.482 3.99216 17.8963L9.83325 11.9328L3.94275 6.06982C3.35492 5.48435 3.35504 4.53524 3.94301 3.94992Z" fill="#202020"/></svg></button>
                <h5 style={{ marginTop: '0' }}>Create post</h5>
                <hr/>
                <form>
                    <div style={formStyle}>
                     <img className="ms-2 mt-2 mb-3" style={imageStyle} src='/profile-icon.jpeg'></img>
                    <textarea placeholder="What's on your mind, Youssef?" style={textareaStyle}></textarea>
                    </div>
                <div style={uploadWrapperStyle}>
          <label htmlFor="fileInput" style={uploadLabelStyle}>
        <i className="fa fa-image" style={iconStyle}></i>
        <i className="fa fa-file-video-o" style={iconStyle}></i>
        <i className="fa fa-smile-o" style={iconStyle}></i>
        <span style={{ marginLeft: '10px' }}>Add to your post</span>
    </label>
    <input
        id="fileInput"
        type="file"
        accept="image/*,video/gif"
        style={{ display: 'none' }}
        onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
                console.log("Selected file:", file.name);
                // Optional: preview or upload logic
            }
        }}
    />
</div>

                   
                    <div style={{ marginTop: '10px' }}>
                        <button type="submit" style={buttonStyle}>Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalStyle = {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '440px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    height: '100px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none',
    resize: 'none',
    outline: 'none',          
    boxShadow: 'none'  
};


const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    width:"100%",
    borderRadius: "8px",
background: "var(--Primary, #004EA0)",
boxShadow: "4px 4px 13px 0px rgba(255, 255, 255, 0.25) inset, 2px 0px 13px 0px rgba(0, 0, 0, 0.15)"
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: '#E7E7E7',
    cursor: 'pointer',
    width: "35px",
    borderRadius:"50%",
  height: "35px",
flexShrink: 0,
};
const imageStyle ={
    width:"40px",
    height:"40px",
    borderRadius:"50%",
}
const formStyle={
    width:"100%",
    borderRadius: "16px",
border: "1px solid var(--Stroke, #E5E7EB)"
}
const mediaIconsStyle = {
    display: 'flex',
    gap: '15px',
    padding: '10px',
    alignItems: 'center',
    borderTop: '1px solid #eee',
    marginTop: '10px'
};


const uploadWrapperStyle = {
    marginTop: '10px',
    borderTop: '1px solid #eee',
    paddingTop: '10px'
};

const uploadLabelStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#004EA0',
    fontWeight: '500'
};

const iconStyle = {
    fontSize: '18px',
    marginRight: '8px'
};
