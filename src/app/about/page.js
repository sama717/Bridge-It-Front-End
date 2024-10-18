import '../about/css/about.css'
import '../about/css/responsive.css'
import Navbar from '../components/landingpageComponents/Navbar'
export default function About() {
    return (
    <div>
        <Navbar/>
        <section class="about-headline text-dark">
            <main className="main-sec">
                <div class="main-text">
                    <h1>About our company</h1>
                    <h2>We believe project management should be as easy as working together—anywhere, anytime</h2>
                </div>
            </main>
            <section className='container about-secondary'>
                <div className='head-text'>
                    <h3>What we do</h3>
                </div>
                <div className='paragraph-text'>
                    <p>At our core, we’re transforming how university students and supervisors manage and complete their projects. We understand that balancing multiple tasks, team communication, and academic deadlines can be overwhelming, so we’ve built a platform that simplifies every step of the process.</p>
                    <p>
                    With our platform, you can organize all your tasks and milestones in one place, ensuring that nothing slips through the cracks. Whether you’re working on a solo project or collaborating with a group, you’ll find tools that help you manage your workload more effectively. Our task organizer allows you to set clear priorities, assign tasks to team members, and track progress with ease.
                    </p>
                </div>
            </section>
        </section>
        <section className='about-sec-2'>
            <div>
                <h2>People choose us because we serve the best for everyone </h2>
            </div>
            <div class="text-dark my-4 grid-container">
                <div class="row grid-row">
                    <div class="box col-lg-5">
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
                    <div class="box col-lg-4">
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
                    <div class="box col-lg-5">
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
                    <div class="box col-lg-4">
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
        </section>
    </div>
    )
}
