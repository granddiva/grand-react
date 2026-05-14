import { useState } from "react";
import Nama from "./Nama";
import Email from "./Email";
import Umur from "./Umur";
import Gender from "./Gender";
import Jurusan from "./Jurusan";
import "tailwindcss";

function Container() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    umur: "",
    gender: "",
    jurusan: "",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.nama) err.nama = "Nama wajib diisi";
    else if (/\d/.test(form.nama))
      err.nama = "Nama tidak boleh angka";

    if (!form.email) err.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Email tidak valid";

    if (!form.umur) err.umur = "Umur wajib diisi";
    else if (isNaN(form.umur))
      err.umur = "Umur harus angka";

    if (!form.gender) err.gender = "Pilih gender";
    if (!form.jurusan) err.jurusan = "Pilih jurusan";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setResult(form);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h2>Form Data Mahasiswa</h2>

      <form onSubmit={handleSubmit}>
        <Nama value={form.nama} onChange={handleChange} error={errors.nama} />
        <Email value={form.email} onChange={handleChange} error={errors.email} />
        <Umur value={form.umur} onChange={handleChange} error={errors.umur} />
        <Gender value={form.gender} onChange={handleChange} error={errors.gender} />
        <Jurusan value={form.jurusan} onChange={handleChange} error={errors.jurusan} />

        <button type="submit">Submit</button>
      </form>

      {result && (
        <div className="result">
          <h4>Data Berhasil:</h4>
          <p>Nama: {result.nama}</p>
          <p>Email: {result.email}</p>
          <p>Umur: {result.umur}</p>
          <p>Gender: {result.gender}</p>
          <p>Jurusan: {result.jurusan}</p>
        </div>
      )}
    </div>
  );
}

export default Container;