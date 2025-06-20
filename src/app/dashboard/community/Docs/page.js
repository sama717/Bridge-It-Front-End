"use client";
import Link from "next/link";
import Layout from "../../../components/dashboardComponents/Layout";
export default function Docs(){

    return(
        <div>
            <Layout>
               <div style={{display:"flex",gap:"12px",alignItems:"center"}} className="mt-5">
               <Link href={`/dashboard/community`}>
                  <button style={{background:"#F5FAFF",fontSize:"12px",height:"40px",gap:"8px",borderRadius:"8px",padding:"10px",color:"#004EA0",border:"none"}} className="me-3">
                  Posts</button>
                  </Link>
                  
                  <button style={{ background: "#004EA0" ,fontSize:"12px",height:"40px",gap:"8px",borderRadius:"8px",padding:"10px",color:"white",border:"none"}}className="me-3">
                   Docs</button>
                 
               </div>
              </Layout>
        </div>
    );
}