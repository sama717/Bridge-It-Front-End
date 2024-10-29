
"use client";
import SearchSection from '../components/landingpageComponents/Search'
import './page.module.css'
import Navbar from '../components/landingpageComponents/Navbar'
import WorktogetherSection from '../components/landingpageComponents/WorktogetherSection';
import Section3 from '../components/landingpageComponents/Section3'
import Everything from '../components/landingpageComponents/EveryThing'
import ConnectWithApps from '../components/landingpageComponents/ConectWithApps'
import ContactUs from '../components/landingpageComponents/ContactUs';
import FAQS from '../components/landingpageComponents/FAQS';
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
          <SearchSection/>
        </div>
        <div>
          <Section3/>
        </div>
        <div>
          <WorktogetherSection/>
        </div>
        <div>
          <Everything/>
        </div>
        <div>
          <ConnectWithApps/>
        </div>
        <div>
          <FAQS/>
        </div>
        <div>
          <ContactUs/>
        </div>
        <div>
          <Footer/>
        </div>
      
      </div>
    );
}