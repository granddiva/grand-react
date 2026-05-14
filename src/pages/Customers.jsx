import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

export default function Customers() {
  return (
    <div>
      <PageHeader
        title="Customers"
        breadcrumb="Home / Customers"
      >
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
          Add Customer
        </button>
      </PageHeader>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="p-3">{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}