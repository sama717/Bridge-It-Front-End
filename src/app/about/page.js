/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion';
import '../about/css/about.css'
import '../about/css/responsive.css'
import Footer from '../components/landingpageComponents/Footer'
import Navbar from '../components/landingpageComponents/Navbar'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import '../../i18n';
const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};
export default function About() {

    const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [lang, setLang] = useState('en');

  const isActive = (path) => (pathname === path ? 'active-link' : '');

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };


    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        question: '',
        name: '',
    });
    
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://api.bridgeit.site/api/question/add', {
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),  
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Success:', data);
    
            // Display success message
            setSuccessMessage('Your message has been sent successfully!');
    
            // Reset form fields
            setFormData({
                email: '',
                subject: '',
                question: '',
                name: '',
            });
    
            // Clear success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <div>
            <Navbar/>
                <main className="main-sec">
                    <div className="main-text">
                        <h1>About our company</h1>
                        <h2>We believe project management should be as easy as working together—anywhere, anytime</h2>
                    </div>
                </main>
            {/* </motion.section> */}
            <motion.section 
                className='container about-secondary'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
            >
                <div className='head-text'>
                    <h3>What we do</h3>
                </div>
                <div className='paragraph-text'>
                    <p>At our core, we’re transforming how university students and supervisors manage and complete their projects. We understand that balancing multiple tasks, team communication, and academic deadlines can be overwhelming, so we’ve built a platform that simplifies every step of the process.</p>
                    <p>
                    With our platform, you can organize all your tasks and milestones in one place, ensuring that nothing slips through the cracks. Whether you’re working on a solo project or collaborating with a group, you’ll find tools that help you manage your workload more effectively. Our task organizer allows you to set clear priorities, assign tasks to team members, and track progress with ease.
                    </p>
                </div>
            </motion.section>
            <motion.section 
                className='about-sec-2'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
            >
                <div>
                    <h2>People choose us because we serve the best for everyone </h2>
                </div>
                <div className="text-dark my-4 grid-container">
                    <div className="row grid-row">
                        <div className="box col-lg-5">
                            <div>
                                <span>
                                    <img src='/Frame 57.png' alt='group icon'></img>
                                </span>
                            </div>
                            <div>
                                <h4>Seamless Collaboration</h4>
                                <p>Connect with your team through shared docs, chats, whiteboards, and video calls for efficient collaboration.</p>
                            </div>
                        </div>
                        <div className="box col-lg-4">
                            <div>
                                <span>
                                    <img src='/Frame 57-1.png' alt='shield-check'></img>
                                </span>
                            </div>
                            <div>
                                <h4>Data Security You Can Trust</h4>
                                <p>Your data is safe with strong encryption and full control over who can access, edit, or view your files.</p>
                            </div>
                        </div>
                        <div className="box col-lg-5">
                            <div>
                                <span>
                                    <img src='/Frame 57-2.png' alt='spark'></img>
                                </span>
                            </div>
                            <div>
                                <h4>AI-Powered Efficiency</h4>
                                <p>Let AI handle the heavy lifting by prioritizing tasks and generating summaries, giving you more time to focus on important project work.</p>
                            </div>
                        </div>
                        <div className="box col-lg-4">
                            <div>
                                <span>
                                    <img src='/Frame 57-3.png' alt='globe'></img>
                                </span>
                            </div>
                            <div>
                                <h4>All-In-One Platform</h4>
                                <p>Manage every aspect of your project—tasks, communication, and documents—in one easy-to-use platform, simplifying your workflow.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-sec-2 text-dark mt-5 mb-3'>
                    <div>
                        <h4>Ready to take your  project to the next level?</h4>
                        <p>With all the tools and features you need in one place, you can manage your tasks, collaborate with your team, and stay organized—effortlessly. Start your project today and experience how simple project management can be</p>
                    </div>
                    <div>
                        <button className='btn start-2-btn fw-bold'>Start Now For Free</button>
                    </div>
                </div>
            </motion.section>
            <motion.section 
                className="faq-about"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
            >
                <h2 className='mt-5'>
                <span className="original-text">Frequently Asked Questions</span>
                <span className="responsive-text">FAQs</span>
            </h2>
            <div className="container mt-5 mb-5">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What is the Property Request feature?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">The Property Request feature allows you to specify the type of property you are looking for. Once you submit your request, our verified real estate agents will reach out to you with tailored property options that meet your criteria.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                How do I submit a property request?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                What information do I need to provide in the property request form?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                How long does it take for an agent to contact me after submitting a request?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">This is the fourth accordion item. You can add any content here.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Is there a fee for using the Property Request feature?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">This is the fifth accordion item. Feel free to change this content.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                Are my details secure when I submit a property request?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">This is the sixth accordion item. Add unique content here as needed.</div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.section>
            <motion.section 
                className='form-section'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
            >
                <div className="form-main container p-5">
                    <div className='form-block'>
                        <h2 className='mb-5'>Send a message</h2>
                        
                        {/* Conditionally render success message */}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        
                        <form id='helpcenter' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="fullname" className="form-label mb-3">Full name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    placeholder="Enter your first and last name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    name='name'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label mb-3">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="subject" className="form-label mb-3">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Subject title"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="details" className="form-label mb-3">Details</label>
                                <textarea
                                    className="form-control"
                                    id="details"
                                    rows="8"
                                    placeholder='Details'
                                    name="question"
                                    value={formData.question}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='form-btn'>
                                <button className='btn mb-5' type='submit'>Send A Message</button>
                            </div>
                        </form>
                    </div>
                    <div className='form-img'>
                        <img src='/form-img.png' alt="form illustration"/>
                    </div>
                </div>
            </motion.section>
            <Footer/>
        </div>
    );
}