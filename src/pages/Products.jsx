import PageHeader from "../components/PageHeader";
import productsData from "../data/products";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div>
      <PageHeader title="Products" breadcrumb="Home / Products">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Add Data
        </button>
      </PageHeader>

      {/* Tabel Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left border-collapse">
            {/* Table Head dengan Background Hijau mirip Gambar */}
            <thead>
              <tr className="bg-green-700 text-white text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold text-center w-16">#</th>
                <th className="px-6 py-4 font-semibold">Code</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Brand</th>
                <th className="px-6 py-4 font-semibold text-right">Price</th>
                <th className="px-6 py-4 font-semibold text-center">Stock</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 text-gray-700 text-sm">
              {productsData.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-green-50/50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 text-center font-medium text-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-xs text-green-700">
                    {product.code}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                    
                      to={`/products/${product.id}`}
                      className="text-emerald-400 hover:text-emerald-500"
                    >
                      {product.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{product.brand}</td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">
                    Rp {product.price * 1000}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        product.stock < 10
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {product.stock} pcs
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
