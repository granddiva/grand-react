import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 mb-2 transition
    ${
      isActive
        ? "bg-green-200 text-green-700 font-bold"
        : "text-gray-600 hover:bg-green-100"
    }`;

  return (
    <div className="w-64 bg-white p-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-6">My Admin</h1>

      <NavLink to="/" className={menuClass}>
        Dashboard
      </NavLink>

      <NavLink to="/orders" className={menuClass}>
        Orders
      </NavLink>

      <NavLink to="/customers" className={menuClass}>
        Customers
      </NavLink>

      <NavLink to="/error400" className={menuClass}>
        Error 400
      </NavLink>

      <NavLink to="/error401" className={menuClass}>
        Error 401
      </NavLink>

      <NavLink to="/error403" className={menuClass}>
        Error 403
      </NavLink>
    </div>
  );
}