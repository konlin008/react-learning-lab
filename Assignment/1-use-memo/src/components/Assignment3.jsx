import { useMemo, useState, } from 'react';

export const Assignment3 = () => {
    const [items,] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Onion', value: 30 },
        { name: 'Chocolates', value: 10 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo(() => {
        var total = 0
        items.forEach(item => {
            total += item.value
        });
        return total
    }, [items])

    const [count, setCount] = useState(0)

    // Your code ends here
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>count {count}</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
