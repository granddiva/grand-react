import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {
  return (
    <div>
      <PageHeader
        title="Orders"
        breadcrumb="Home / Orders"
      >
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add Orders
        </button>
      </PageHeader>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}