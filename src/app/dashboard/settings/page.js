"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/dashboardComponents/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import AccountForm from '../../components/settingsComponents/AccountForm'
import DeleteModule  from '../../components/settingsComponents/DeleteModule'
import Styles from './page.module.css'
import Link from "next/link"; 
import { useRouter } from "next/navigation";
export default function Settings(){
    return(
        <Layout>
              <div>
            <h4 style={{color:"#374151"}}>Settings</h4>
            <div className={Styles.container}>
                <b className="mb-1">Account</b>
            <AccountForm></AccountForm>
            </div>
            <div className={Styles.container} >
            <DeleteModule></DeleteModule>
            </div>
           
       
        </div>
    
        </Layout>
      
    );
}