import React from 'react';

interface Props {
    balance: number;
}

export default function Balance({ balance }: Props) {
    return (
        <h2 className="text-xl font-semibold mb-2">Balance: ${balance.toFixed(2)}</h2>
    );
}
