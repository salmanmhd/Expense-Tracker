import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addCategory, removeCategory } from '../context/accountSlice';
import Title from './Title';
import { Plus, X } from 'lucide-react';

const Categories = () => {
  const [newCategory, setNewCategory] = useState('');
  const { expenses, categories } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  // Calculate amounts for each category
  const categoryAmounts = categories.reduce((acc, category) => {
    acc[category] = expenses
      .filter(item => item.category === category)
      .reduce((sum, item) => sum + item.amount, 0);
    return acc;
  }, {});

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      dispatch(addCategory(newCategory.trim()));
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (category) => {
    dispatch(removeCategory(category));
  };

  return (
    <section id='categories' className='space-y-8 pt-12 md:pt-0'>
      <Title>Categories</Title>

      {/* Add Category Form */}
      <form onSubmit={handleAddCategory} className='flex space-x-4'>
        <input
          type='text'
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder='Enter new category'
          className='flex-1 max-w-md p-3 bg-white/10 border border-gray-600 rounded-lg backdrop-blur-lg'
        />
        <button
          type='submit'
          className='px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition flex items-center'
        >
          <Plus size={20} className="mr-2" /> Add
        </button>
      </form>

      {/* Categories Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories.map((category) => (
          <CategoryItem
            key={category}
            text={category}
            amount={categoryAmounts[category]}
            onRemove={() => handleRemoveCategory(category)}
          />
        ))}
      </div>
    </section>
  );
};

function CategoryItem({ text, amount, onRemove }) {
  return (
    <div className='relative bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center border border-white/20 shadow-lg'>
      <button
        onClick={onRemove}
        className='absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition'
      >
        <X size={20} className="text-gray-400 hover:text-red-400" />
      </button>
      <h3 className='text-xl font-medium text-gray-300 capitalize'>{text}</h3>
      <p className='text-lg mt-2 text-gray-400'>{amount}</p>
    </div>
  );
}

export default Categories;
