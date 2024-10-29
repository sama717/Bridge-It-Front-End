import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import './css/PricingHeader.css'

export default function PricingHeader() {
    const [billing, setBilling] = useState('yearly');

    const toggleBilling = () => {
        setBilling((prevBilling) => (prevBilling === 'yearly' ? 'monthly' : 'yearly'));
    };

    return (
        <div className="pricing-header">
            <h5 style={{color:"#170F49"}}>Simple and transparent pricing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit volutpat massa</p>
            <div className="billing-toggle" onClick={toggleBilling} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center',justifyContent:"center" }}>
                <FontAwesomeIcon
                    icon={billing === 'yearly' ? faToggleOff : faToggleOn}
                    size="2x"
                    style={{ marginRight: '10px',color:"#004EA0" }}
                />
                {billing === 'monthly' ? (
                    <span>Monthly</span>
                ) : (
                    <div>
                        <span>Yearly</span>
                        <button className="save-button">Save 25%</button>
                    </div>
                    
                )}
            </div>
        </div>
    );
}
