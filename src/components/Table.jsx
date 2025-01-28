function Table({ expenses }) {
  return (
    <div className="overflow-x-auto">
      <table className='w-full min-w-[600px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg'>
        <thead className='bg-white/10 border-b border-gray-600'>
          <tr>
            <th className='p-3 md:p-4 text-left text-sm md:text-base text-gray-300'>Name</th>
            <th className='p-3 md:p-4 text-left text-sm md:text-base text-gray-300'>Amount</th>
            <th className='p-3 md:p-4 text-left text-sm md:text-base text-gray-300'>Category</th>
            <th className='p-3 md:p-4 text-left text-sm md:text-base text-gray-300'>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <TableRows
              key={expense.expense}
              name={expense.expense}
              amount={expense.amount}
              category={expense.category}
              date={expense.date}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRows({ name, amount, date, category }) {
  return (
    <tr className='border-b border-gray-600'>
      <td className='p-3 md:p-4 text-sm md:text-base text-gray-300'>{name}</td>
      <td className='p-3 md:p-4 text-sm md:text-base text-gray-300'>{amount}</td>
      <td className='p-3 md:p-4 text-sm md:text-base text-gray-300'>{category}</td>
      <td className='p-3 md:p-4 text-sm md:text-base text-gray-300'>{date}</td>
    </tr>
  );
}

export default Table;
