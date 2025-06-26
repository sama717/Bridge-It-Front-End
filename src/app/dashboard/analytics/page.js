"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/dashboardComponents/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskDoneChart from '../../components/dashboardComponents/Graph'
import DocViews from '../../components/dashboardComponents/DocViews'
import DocSaved from '../../components/dashboardComponents/DocSaved'

import Link from "next/link"; 
import { useRouter } from "next/navigation";
export default function Support(){
    return(
        <Layout>
        <div>
          <h4 style={{color:"#374151"}}>Analytics</h4>
        </div>
        <div>
        <div>
            <TaskDoneChart />
        </div>
        <div class="col-12 col-md-12 col-lg-4 d-flex flex-column justify-content-between">
            <DocViews/>
            <DocSaved />
        </div>
        </div>
        </Layout>
       
    );
};