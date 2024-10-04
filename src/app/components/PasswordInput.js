
export default function PasswordInput({ value, onChange }) {
    return (
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
          value={value}
          onChange={onChange}
          required
        />
        <p className="text-muted" style={{fontSize:"10px",color:"#787e8a",marginTop:"-10px"}}>
          Use 8 characters or more with a mix of letters, numbers, and symbols.
        </p>
        
      </div>
    );
  }
  