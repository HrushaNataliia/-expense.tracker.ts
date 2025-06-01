import React, { useState } from 'react';
import { Transaction } from '../types/transaction';

interface Props {
    categories: string[];
    onAdd: (transaction: Transaction) => void;
}

export default function TransactionForm({ categories, onAdd }: Props) {
    const [type, setType] = useState<'income' | 'expense'>('expense');
    const [category, setCategory] = useState('Food');
    const [amount, setAmount] = useState<number>(0);

    const handleSubmit = () => {
        if (!amount) return;
        onAdd({
            id: Date.now(),
            type,
            category,
            amount
        });
        setAmount(0);
    };

    return (
        <div className="mb-4">
            <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')} className="border p-2 rounded mr-2">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded mr-2">
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} className="border p-2 rounded mr-2 w-24" placeholder="Amount" />

            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
    );
}