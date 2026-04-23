import { useState } from "react";
import GuestPage from "./pages/GuestPage";
import AdminPage from "./pages/AdminPage";

export default function Tugasp4App() {
  const [role, setRole] = useState("guest");

  return (
    <div>

      <div className="p-4 flex gap-4">
        <button
          onClick={() => setRole("guest")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Guest
        </button>

        <button
          onClick={() => setRole("admin")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Admin
        </button>
      </div>

      {role === "guest" ? <GuestPage /> : <AdminPage />}

    </div>
  );
}