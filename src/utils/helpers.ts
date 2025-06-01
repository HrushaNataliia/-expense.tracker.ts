import { Transaction } from '../types/transaction';

export const calculateBalance = (transactions: Transaction[]): number => {
    return transactions.reduce((acc, t) => t.type === 'income' ? acc + t.amount : acc - t.amount, 0);
};

export const getCategoryTotals = (transactions: Transaction[], categories: string[]) => {
    return categories.map((cat) => {
        const total = transactions
            .filter((t) => t.category === cat && t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
        return { name: cat, value: total };
    }).filter((entry) => entry.value > 0);
};