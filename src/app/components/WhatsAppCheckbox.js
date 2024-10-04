
export default function WhatsAppCheckbox({ checked, onChange }) {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          name="sameAsWhatsapp"
          className="form-check-input"
          id="whatsappCheck"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor="whatsappCheck" className="form-check-label">
          Same as WhatsApp number
        </label>
      </div>
    );
  }
  