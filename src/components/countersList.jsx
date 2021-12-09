import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
        console.log("handle reset");
    };
     
    const handleIncrement = id => {
        setCounters(prevState => {
            
            return prevState.map(count => {
                if(count.id === id) {
                    return{...count, value:count.value + 1};
                }
                return count;
            })
        })
        //setValue((prevState) => prevState + 1);
    };
    const handleDecrement = id => {
        setCounters(prevState => {
            return prevState.map(count => {
                if (count.id === id){
                    return{...count, value: count.value - 1}
                }
                return count;
            })
        })
        // setValue((prevState) => prevState - 1);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter 
                   key={count.id} 
                   onDelete={handleDelete} 
                   {...count} 
                   onHandleIncrement={() => handleIncrement(count.id)}
                   onHandleDecrement={() => handleDecrement((count.id))}/>
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};
export default CountersList;
