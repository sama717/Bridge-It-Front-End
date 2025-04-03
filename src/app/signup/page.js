/* eslint-disable @next/next/no-img-element */
"use client";
import styles from '../page.module.css';
import SignUpForm from '../components/authCopmonets/SignUpForm';
import { Provider } from 'react-redux';
import store from '../../store/page'; 

export default function SignUpPage() {
    return (
        <Provider store={store}> 
            <div className='container'>
                <div className={styles.gridContainer}>
                    <div className={styles.formContainer}>
                    <div className={styles.formConytent}>
                    <SignUpForm />
                    </div> 
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.overlay}>
                            <div className={styles.logoContainer}>
                                <img className={styles.logo} src='projectlogo.png' alt='Logo' />
                            </div>
                            <div className={styles.overlayText}>
              <div style={{display:"block"}}>
                <div className='fw-bold ms-3 fs-3'> Start your journey with us!</div>
                <div className='fs-6 ms-3'>Our mission is to simplify the management of university</div>
                <div className='fs-6 ms-3'>projects by providing an intuitive, all-in-one platform.</div>
              </div> 
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
