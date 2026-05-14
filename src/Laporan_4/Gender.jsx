function Gender({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label>Gender</label>
      <select name="gender" value={value} onChange={onChange}>
        <option value="">Pilih</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Gender;