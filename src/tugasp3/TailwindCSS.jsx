import UserForm from "./UserForm";

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex items-center justify-center p-6">

      <div className="w-full max-w-lg">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700 tracking-wide">
            Marketplace Checkout
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Lengkapi data pembelian produk dengan benar untuk melanjutkan transaksi
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-200">

          <UserForm />

        </div>

        {/* FOOTER */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © 2026 GrandStore • All Rights Reserved
        </div>

      </div>

    </div>
  );
}