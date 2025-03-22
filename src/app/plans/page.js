"use client"; // Ensures this page only renders on the client-side

import './page.module.css';
import Header from '../components/landingpageComponents/Header/Navbar';
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
            <Header />
            <PricingHeader />
            <PricingCards />
            <FeatureTable />
            <Footer />
        </div>
    );
}