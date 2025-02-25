import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Table from './Table';
import Title from './Title';
import { useState } from 'react';
import { addExpense } from '../context/accountSlice';

function AddExpense() {
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('food');
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { expenses } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!expense || !amount || !date || !category) return;

    const obj = {
      expense,
      amount,
      category,
      date,
      id: Date.now(),
    };

    dispatch(addExpense(obj));

    setAmount('');
    setExpense('');
    setCategory('food');
    setDate('');
    setShowModal(true);
  }

  if (showModal)
    return (
      <Modal
        show={true}
        message={'Expense Added Successfully'}
        onClose={() => setShowModal(false)}
      />
    );

  return (
    <section id='add-expense' className='w-full h-full space-y-8 pt-12 md:pt-0'>
      <Title>Add Expense</Title>

      <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0'>
        <form className='space-y-4 w-full lg:w-1/2' onSubmit={handleSubmit}>
          <InputElement
            name={expense}
            onChange={(e) => setExpense(e.target.value)}
            type='text'
            title={'Name '}
            placeholder={'Enter item name'}
          />

          <InputElement
            placeholder={'Enter Amount'}
            name={amount}
            title={'Amount'}
            onChange={(e) => setAmount(Number(e.target.value))}
            type='number'
          />

          <div className='space-y-2'>
            <label htmlFor='category' className='block text-lg text-gray-300'>
              Category
            </label>
            <select
              name='category'
              onChange={(e) => setCategory(e.target.value)}
              className='w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg backdrop-blur-lg'
            >
              <option value='food'>Food</option>
              <option value='education'>Education</option>
              <option value='health'>Health</option>
            </select>
          </div>

          <div className='space-y-2'>
            <label htmlFor='date' className='block text-lg text-gray-300'>
              Date
            </label>
            <input
              type='date'
              name='date'
              onChange={(e) => {
                setDate(e.target.value);
                console.log(e.target.value);
              }}
              className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 mt-8 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'
          >
            Add Expense
          </button>
        </form>

        <div className='w-full lg:w-1/2 pl-8 mt-8 lg:mt-0'>
          <Table expenses={expenses.slice(-4).reverse()} />
        </div>
      </div>
    </section>
  );
}

function InputElement({ type, placeholder, name, value, onChange, title }) {
  return (
    <div className='space-y-2'>
      <label htmlFor='expense-name' className='block text-lg text-gray-300'>
        {title}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        onChange={onChange}
        className='w-full p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
      />
    </div>
  );
}

export default AddExpense;
