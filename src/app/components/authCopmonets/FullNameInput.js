
export default function FullNameInput({ value, onChange }) {
    return (
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Enter your first and last name"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  }
  