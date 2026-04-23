function Email({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label>Email</label>
      <input type="text" name="email" value={value} onChange={onChange} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Email;