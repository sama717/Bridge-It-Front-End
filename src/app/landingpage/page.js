"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import './page.module.css';
import Navbar from '../components/landingpageComponents/Navbar';
import SearchSection from '../components/landingpageComponents/Search';
import WorktogetherSection from '../components/landingpageComponents/WorktogetherSection';
import Section3 from '../components/landingpageComponents/Section3';
import Everything from '../components/landingpageComponents/EveryThing';
import ConnectWithApps from '../components/landingpageComponents/ConectWithApps';
import ContactUs from '../components/landingpageComponents/ContactUs';
import FAQS from '../components/landingpageComponents/FAQS';
import Footer from '../components/landingpageComponents/Footer';

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Home() {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div>
            <Navbar />
            {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} 
                variants={fadeInVariants}
                style={{ y: yTransform }} 
            > */}
                <SearchSection />
            {/* </motion.div> */}

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <Section3 />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <WorktogetherSection />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <Everything />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <ConnectWithApps />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <FAQS />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <ContactUs />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                style={{ y: yTransform }}
            >
                <Footer />
            </motion.div>
        </div>
    );
}
