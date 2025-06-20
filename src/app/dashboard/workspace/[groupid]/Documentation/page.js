import Layout from "../../../../components/dashboardComponents/Layout";

export default function Documentation(){
 
    return(
        <div>
  <Layout>
   <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
   <button style={{ background: "linear-gradient(81.92deg, #002572 0.81%, #007BFF 96.35%)" ,fontSize:"12px",height:"40px",gap:"8px",borderRadius:"8px",padding:"10px",color:"white",border:"none"}}className="me-3">
       <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#FFFFFF" d="M12 3a1 1 0 0 1 1 1v6.268l5.428-3.134a1 1 0 0 1 1 1.732L14 12l5.428 3.134a1 1 0 1 1-1 1.732L13 13.732V20a1 1 0 1 1-2 0v-6.268l-5.428 3.134a1 1 0 1 1-1-1.732L10 12L4.572 8.866a1 1 0 0 1 1-1.732L11 10.268V4a1 1 0 0 1 1-1"/></g></svg>Steps</button>
      <button style={{background:"#F5FAFF",color:"#4B5563",fontSize:"12px",height:"40px",gap:"8px",borderRadius:"8px",padding:"10px",color:"white",border:"none",color:"#4B5563"}} className="me-3">
       <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#4B5563" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>History</button>
       <button style={{color:"#004EA0",fontSize:"12px",padding:"8px",border:"none",borderRadius:"8px",backgroundColor:"#F5FAFF",border:"1px #004EA0 solid",position:"absolute",right:"5%"}}> + Create New Documentation</button>
   </div>
  </Layout>
        </div>
    );
}