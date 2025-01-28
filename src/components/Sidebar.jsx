import { NavLink } from "react-router-dom";
import { Wallet } from "lucide-react";

const Sidebar = ({ setShow }) => {
  const handleLinkClick = () => {
    // Only close sidebar on mobile
    if (window.innerWidth < 768) {
      setShow(false);
    }
  };

  return (
    <>
      <nav className="fixed h-full w-64 rounded-br-lg rounded-tr-lg border-b border-r border-t border-white/20 bg-white/5 px-6 py-8 shadow-lg backdrop-blur-lg">
        <div className="mb-8 mt-16 flex items-center justify-center md:mt-1">
          <Wallet size={48} strokeWidth={1.2} />
          <h2 className="pl-4 text-2xl font-semibold leading-6 text-green-500">
            Expense Tracker
          </h2>
        </div>

        <ul>
          <LinkPage to={"/"} text={"Dashboard"} onClick={handleLinkClick} />
          <LinkPage to={"/add-expense"} text={"Add Expense"} onClick={handleLinkClick} />
          <LinkPage to={"/add-income"} text={"Add Income"} onClick={handleLinkClick} />
          <LinkPage to={"/transactions"} text={"Transactions"} onClick={handleLinkClick} />
          <LinkPage to={"/reports"} text={"Report"} onClick={handleLinkClick} />
          <LinkPage to={"/categories"} text={"Categories"} onClick={handleLinkClick} />

          {/* <LinkPage to={'settings'} text={'Settings'} /> */}
        </ul>
      </nav>
    </>
  );
};

function LinkPage({ to, text, onClick }) {
  return (
    <li className="mb-4">
      <NavLink
        to={to}
        onClick={onClick}
        className="block rounded-lg bg-white/20 px-4 py-3 text-lg shadow-lg transition hover:bg-white/30"
      >
        {text}
      </NavLink>
    </li>
  );
}

export default Sidebar;
