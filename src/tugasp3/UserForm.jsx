import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    noHp: "",
    metodePembayaran: "",
    kurir: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    let err = {};

    if (!form.nama) err.nama = "Nama wajib diisi";
    else if (!isNaN(form.nama)) err.nama = "Tidak boleh angka";
    else if (form.nama.length < 3) err.nama = "Minimal 3 karakter";

    if (!form.alamat) err.alamat = "Alamat wajib diisi";
    else if (form.alamat.length < 5) err.alamat = "Alamat terlalu pendek";

    if (!form.noHp) err.noHp = "Nomor HP wajib diisi";
    else if (isNaN(form.noHp)) err.noHp = "Harus berupa angka";
    else if (form.noHp.length < 10) err.noHp = "Nomor tidak valid";

    if (!form.metodePembayaran) err.metodePembayaran = "Pilih metode pembayaran";
    if (!form.kurir) err.kurir = "Pilih kurir";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-purple-200">
      
      {/* TITLE */}
      <h2 className="text-xl font-bold text-center text-purple-700 mb-6">
        Checkout Pembelian
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <InputField
          label="Nama Pembeli"
          type="text"
          value={form.nama}
          onChange={(e) => handleChange("nama", e.target.value)}
          error={errors.nama}
        />

        <InputField
          label="Alamat Pengiriman"
          type="text"
          value={form.alamat}
          onChange={(e) => handleChange("alamat", e.target.value)}
          error={errors.alamat}
        />

        <InputField
          label="Nomor HP"
          type="text"
          value={form.noHp}
          onChange={(e) => handleChange("noHp", e.target.value)}
          error={errors.noHp}
        />

        <SelectField
          label="Metode Pembayaran"
          value={form.metodePembayaran}
          onChange={(e) => handleChange("metodePembayaran", e.target.value)}
          options={["Transfer Bank", "E-Wallet", "COD (Bayar di Tempat)"]}
          error={errors.metodePembayaran}
        />

        <SelectField
          label="Jasa Pengiriman"
          value={form.kurir}
          onChange={(e) => handleChange("kurir", e.target.value)}
          options={["JNE", "J&T", "SiCepat", "AnterAja"]}
          error={errors.kurir}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition duration-200 shadow-md shadow-purple-200"
        >
          Bayar Sekarang
        </button>
      </form>

      {/* HASIL */}
      {submitted && (
        <div className="mt-6 p-5 rounded-xl bg-purple-50 border border-purple-200 shadow-inner">
          <h3 className="font-bold text-purple-700 mb-3 border-b border-purple-200 pb-2">
            Pesanan Berhasil Diproses
          </h3>

          <div className="space-y-1">
            <p className="text-sm text-purple-900"><span className="font-medium">Nama:</span> {form.nama}</p>
            <p className="text-sm text-purple-900"><span className="font-medium">Alamat:</span> {form.alamat}</p>
            <p className="text-sm text-purple-900"><span className="font-medium">No HP:</span> {form.noHp}</p>
            <p className="text-sm text-purple-900"><span className="font-medium">Pembayaran:</span> {form.metodePembayaran}</p>
            <p className="text-sm text-purple-900"><span className="font-medium">Kurir:</span> {form.kurir}</p>
          </div>
        </div>
      )}
    </div>
  );
}