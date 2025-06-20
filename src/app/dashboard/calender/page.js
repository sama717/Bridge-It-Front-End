"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/dashboardComponents/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import Task from '../../components/calenderComponet/tasks'

import Link from "next/link"; 
import { useRouter } from "next/navigation";
export default function Support(){
    return(
        <Layout>
             <div>
          <h4>Calendar</h4> 
          <Task></Task>
        </div>
        </Layout>
       
    );
};