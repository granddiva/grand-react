```jsx
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      
      {/* SEARCH BAR */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full border p-2 pl-10 rounded-lg"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* ICON + PROFILE */}
      <div className="flex items-center gap-5">
        
        {/* NOTIFICATION */}
        <div className="relative">
          <FaBell className="text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            50
          </span>
        </div>

        {/* CHART */}
        <FcAreaChart className="text-xl cursor-pointer" />

        {/* SETTINGS */}
        <SlSettings className="text-xl cursor-pointer" />

        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <span>
            Hello, 
            <b>Granddiva</b>
          </span>
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Granddiva"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-green-400"
          />
        </div>

      </div>
    </div>
  );
}
```
