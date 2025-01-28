import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 3000,
  totalIncome: 5000,
  totalExpense: 2000,
  categories: ['food', 'education', 'health'],
  incomes: [
    {
      amount: 5000,
      date: '2022-01-01',
      source: 'pocket money',
      id: 1,
    },
    {
      amount: 20000,
      date: '2024-01-01',
      source: 'free lancing',
      id: 2,
    },
  ],
  expenses: [
    {
      amount: 500,
      expense: 'Groceries',
      category: 'food',
      date: '2022-01-01',
      id: 1,
    },
    {
      amount: 200,
      expense: 'Dinner',
      category: 'food',
      date: '2024-01-02',
      id: 2,
    },
    {
      amount: 100,
      expense: 'banana',
      category: 'health',
      date: '2023-01-03',
      id: 3,
    },
  ],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addIncome(state, action) {
      state.totalIncome += action.payload.amount;
      state.balance += action.payload.amount;
      state.incomes = [...state.incomes, action.payload];
    },
    addExpense(state, action) {
      state.totalExpense -= action.payload.amount;
      state.balance -= action.payload.amount;
      state.expenses = [...state.expenses, action.payload];
    },
    addCategory(state, action) {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload.toLowerCase());
      }
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter(
        (category) => category !== action.payload.toLowerCase()
      );
    },
  },
});

export const { addIncome, addExpense, addCategory, removeCategory } = accountSlice.actions;

export default accountSlice.reducer;
