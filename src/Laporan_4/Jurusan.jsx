function Jurusan({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label>Jurusan</label>
      <select name="jurusan" value={value} onChange={onChange}>
        <option value="">Pilih</option>
        <option value="Informatika">Informatika</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
        <option value="Manajemen">Manajemen</option>
      </select>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Jurusan;