import { NavLink } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className='bg-white/5 backdrop-blur-lg border-t border-r border-b border-white/20 w-64 px-6 py-8 fixed rounded-tr-lg rounded-br-lg shadow-lg h-full'>
      <div className='mb-8 flex items-center justify-center '>
        <Wallet size={48} strokeWidth={1.2} />
        <h2 className='text-2xl font-semibold  pl-4 leading-6 text-green-500   '>
          Expense Tracker
        </h2>
      </div>

      <ul>
        <LinkPage to={'/'} text={'Dashboard'} />
        <LinkPage to={'/add-expense'} text={'Add Expense'} />
        <LinkPage to={'/add-income'} text={'Add Income'} />
        <LinkPage to={'/transactions'} text={'Transactions'} />
        <LinkPage to={'/reports'} text={'Report'} />
        <LinkPage to={'/categories'} text={'Categories'} />

        {/* <LinkPage to={'settings'} text={'Settings'} /> */}
      </ul>
    </nav>
  );
};

function LinkPage({ to, text }) {
  return (
    <li className='mb-4'>
      <NavLink
        to={to}
        className='block py-3 px-4 rounded-lg text-lg bg-white/20 hover:bg-white/30 shadow-lg transition'
      >
        {text}
      </NavLink>
    </li>
  );
}

export default Sidebar;
