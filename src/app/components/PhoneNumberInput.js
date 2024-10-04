"use client";
import { useEffect } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export default function PhoneNumberInput({ value, onChange }) {
  useEffect(() => {
    const phoneInput = document.querySelector("#phoneNumber");
    intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        fetch('https://ipinfo.io') 
          .then((resp) => resp.json())
          .then((resp) => callback(resp.country))
          .catch(() => callback('us')); 
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // Utility script
    });
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        className="form-control"
        placeholder="Enter your phone number"
        value={value}
        onChange={onChange}
        required
       style={{width:"100% !important" }}/>
    </div>
  );
}
