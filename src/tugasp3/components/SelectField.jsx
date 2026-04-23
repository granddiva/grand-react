export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  error,
  options = [],
}) {
  return (
    <div className="mb-5">

      {/* LABEL */}
      <label className="block text-sm font-semibold text-purple-700 mb-1">
        {label}
      </label>

      {/* INPUT / SELECT */}
      {options.length > 0 ? (
        <select
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2.5 text-sm border rounded-xl outline-none transition shadow-sm
          ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-purple-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-500"
          }`}
        >
          <option value="">-- Pilih {label} Produk --</option>

          {/* OPSI */}
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={`Masukkan ${label} produk`}
          className={`w-full px-3 py-2.5 text-sm border rounded-xl outline-none transition shadow-sm
          ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-purple-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-500"
          }`}
        />
      )}

      {/* ERROR */}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}