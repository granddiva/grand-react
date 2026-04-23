function Nama({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label>Nama</label>
      <input type="text" name="nama" value={value} onChange={onChange} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Nama;