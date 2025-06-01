import React from 'react';
import { Transaction } from '../types/transaction';

interface Props {
    transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
    return (
        <ul className="mt-4">
            {transactions.map((t) => (
                <li key={t.id} className="border-b py-1 text-sm">
                    {t.type.toUpperCase()} - {t.category}: ${t.amount}
                </li>
            ))}
        </ul>
    );
}
