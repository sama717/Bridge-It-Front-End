

export default function RememberMeCheckbox({ checked, onChange }) {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          name="rememberMe"
          className="form-check-input custom-checkbox"
          id="rememberMeCheck"
          checked={checked}
          onChange={onChange}
         
        />
        <label htmlFor="rememberMeCheck" className="form-check-label" style={{color:"black"}}>
          Remember me
        </label>
      </div>
    );
  }
  