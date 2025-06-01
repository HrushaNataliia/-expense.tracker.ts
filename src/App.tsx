import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import Balance from './components/Balance';
import Chart from './components/Chart';
import TransactionList from './components/TransactionList';
import { Transaction } from './types/transaction';
import { calculateBalance, getCategoryTotals } from './utils/helpers';

const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Salary', 'Other'];

export default function App() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const handleAdd = (transaction: Transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const balance = calculateBalance(transactions);
    const categoryTotals = getCategoryTotals(transactions, categories);

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
            <TransactionForm categories={categories} onAdd={handleAdd} />
            <Balance balance={balance} />
            <Chart data={categoryTotals} />
            <TransactionList transactions={transactions} />
        </div>
    );
}