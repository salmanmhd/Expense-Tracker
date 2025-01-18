import { useSelector } from 'react-redux';
import IncomeTable from './IncomeTable';
import Table from './Table';
import Title from './Title';

function Transaction() {
  const { expenses, incomes } = useSelector((state) => state.account);
  return (
    <section id='expense-list' className='space-y-8 '>
      <Title>Expense Details</Title>
      <Table expenses={expenses} />

      <Title>Income Details</Title>
      <IncomeTable incomes={incomes} />
    </section>
  );
}

export default Transaction;
