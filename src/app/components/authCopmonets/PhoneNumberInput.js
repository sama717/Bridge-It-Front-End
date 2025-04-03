"use client";
import { useEffect, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export default function PhoneNumberInput({ value, onChange }) {
  const [iti, setIti] = useState(null);

  useEffect(() => {
    const phoneInput = document.querySelector("#phoneNumber");
    const itiInstance = intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        fetch('https://ipinfo.io') 
          .then((resp) => resp.json())
          .then((resp) => callback(resp.country))
          .catch(() => callback('us'));
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    setIti(itiInstance);

    return () => {
      if (itiInstance) {
        itiInstance.destroy();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const formattedNumber = iti ? iti.getNumber(intlTelInputUtils.numberFormat.E164) : e.target.value;

    onChange({
      target: {
        name: e.target.name,
        value: String(formattedNumber),  // Ensure it's a string
      },
    });
  };

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
        onChange={handleInputChange}
        required
        style={{ width: "100% !important" }}
      />
    </div>
  );
}