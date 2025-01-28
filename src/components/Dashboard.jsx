import { useSelector } from "react-redux";
import IncomeTable from "./IncomeTable";
import Table from "./Table";
import Title from "./Title";

function Dashboard() {
  const { balance, totalIncome, totalExpense, expenses, incomes } = useSelector(
    (state) => state.account,
  );
  return (
    <section id="dashboard" className="space-y-8 pt-12 md:pt-0">
      <Title>Dashboard</Title>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <DashboardItems text="Total Income" value={totalIncome} />
        <DashboardItems text="Total Expense" value={totalExpense} />
        <DashboardItems text="Balance" value={balance} />
      </div>
      <Title>Recent Expenses</Title>
      <Table expenses={expenses.slice(-2).reverse()} />
      <Title>Recent Incomes</Title>
      <IncomeTable incomes={incomes.slice(-2).reverse()} />
    </section>
  );
}

function DashboardItems({ text, value }) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-lg backdrop-blur-lg">
      <h3 className="text-xl font-medium text-gray-300">{text}</h3>
      <p
        className={`mt-2 text-2xl ${
          value < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default Dashboard;
