function Umur({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label>Umur</label>
      <input type="text" name="umur" value={value} onChange={onChange} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Umur;