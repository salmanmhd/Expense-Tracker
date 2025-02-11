import { useState } from 'react';
import Modal from './Modal';
import Title from './Title';
import IncomeTable from './IncomeTable';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../context/accountSlice';

function AddIncome() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { totalExpense, totalIncome, balance, incomes } = useSelector(
    (state) => state.account
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !date || !source) return;
    const obj = { amount, source, date, id: Date.now() };
    dispatch(addIncome(obj));
    setShowModal(true);
  }

  if (showModal)
    return (
      <Modal
        message={'Added income'}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    );

  return (
    <div>
      <section id='add-income' className='space-y-8 w-full h-full pt-12 md:pt-0'>
        <Title>Add Income</Title>
        {/* Flex container to align form and table side by side */}
        <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0'>
          {/* Form */}
          <form className='space-y-4 w-full lg:w-1/2' onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <label htmlFor='amount' className='block text-lg text-gray-300'>
                Amount
              </label>
              <input
                type='number'
                id='amount'
                placeholder='Enter amount'
                name='amount'
                onChange={(e) => setAmount(Number(e.target.value))}
                className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='income-source'
                className='block text-lg text-gray-300'
              >
                Income Source
              </label>
              <input
                type='text'
                id='income-source'
                placeholder='E.g. Salary, Freelance'
                onChange={(e) => setSource(e.target.value)}
                className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='date' className='block text-lg text-gray-300'>
                Date
              </label>
              <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
                className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
              />
            </div>
            <button
              type='submit'
              className='w-full py-3 mt-10 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
            >
              Add Income
            </button>
          </form>
          <div className='w-full lg:w-1/2 pl-0 lg:pl-8 mt-8 lg:mt-0'>
            <IncomeTable incomes={incomes.slice(-3).reverse()} />
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Total Income</h3>
          <p className='text-2xl mt-2 text-green-400'>{totalIncome}</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Total Expense</h3>
          <p className='text-2xl mt-2 text-green-400'>{totalExpense}</p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>Balance</h3>
          <p className='text-2xl mt-2 text-green-400'>{balance}</p>
        </div>
      </div>
    </div>
  );
}

export default AddIncome;
