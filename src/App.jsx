import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddExpense from "./components/AddExpense";
import Transaction from "./components/Transaction";
import Reports from "./components/Reports";
import Categories from "./components/Categories";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddIncome from "./components/AddIncome";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Sidebar and toggle button */}
        <div className="relative">
          <div
            className="absolute left-5 top-5 z-20 md:hidden"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <X width={38} height={38} />
            ) : (
              <Menu width={38} height={38} />
            )}
          </div>

          {/* Sidebar */}
          <div
            className={`fixed left-0 top-0 h-full w-64 bg-gray-900 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
              show ? "z-30 translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar setShow={setShow} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-8 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/add-income" element={<AddIncome />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
