

export default function EmailInput({ value, onChange }){
    return (
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={value}
            onChange={onChange}
            required
          />
        </div>
      );

}