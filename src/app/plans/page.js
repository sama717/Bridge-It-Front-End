"use client"; // Ensures this page only renders on the client-side

import './page.module.css';
import Navbar from '../components/landingpageComponents/Navbar';
import PricingHeader from '../components/planspageCopmponent/PricingHeader';
import PricingCards from '../components/planspageCopmponent/PricingCards';
import FeatureTable from '../components/planspageCopmponent/FeatureComparisonTable';
import Footer from '../components/landingpageComponents/Footer';
import { useEffect } from 'react';

export default function Plans() {
    useEffect(() => {
        document.body.classList.add('plans-page');

        return () => {
            document.body.classList.remove('plans-page');
        };
    }, []);

    return (
        <div>
            <Navbar />
            <PricingHeader />
            <PricingCards />
            <FeatureTable />
            <Footer />
        </div>
    );
}