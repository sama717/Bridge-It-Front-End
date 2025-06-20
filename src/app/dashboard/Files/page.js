
"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/dashboardComponents/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link"; 
import { useRouter } from "next/navigation";
import FileHeader from '../../components/FilesComponents/Header'
import Uploadection from '../../components/FilesComponents/uploadesection'
export default function Files(){
    return(
        <div>
            <Layout>
            <h4  className="mb-5" style={{color:"#374151"}}>Files</h4>
            <FileHeader>
            </FileHeader>
            <Uploadection   ></Uploadection>
            </Layout>
 
 
        </div>
    );
}