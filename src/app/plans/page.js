
"use client";
import './page.module.css'
import Navbar from '../components/landingpageComponents/Navbar'
import PricingHeader from '../components/planspageCopmponent/PricingHeader';
import PricingCards from '../components/planspageCopmponent/PricingCards';
import FeatureTable from '../components/planspageCopmponent/FeatureComparisonTable';
import Footer from '../components/landingpageComponents/Footer'
import { useEffect } from 'react';
export default function Home(){
  useEffect(() => {
    document.body.classList.add('landing-page');
    return () => {
      document.body.classList.remove('landing-page');
    };
  }, []);
    return(
      <div>
        <h1>
          <Navbar/>
        </h1>
        <div>
          <PricingHeader/>
        </div>
        <div>
          <PricingCards/>
        </div>
        <div>
          <FeatureTable/>
        </div>
        <div>
          <Footer/>
        </div>
      
      </div>
    );
}