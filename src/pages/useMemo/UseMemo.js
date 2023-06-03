import React, { useState, useMemo } from 'react'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function UseMemo() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    const location = useLocation()
    const navigate = useNavigate()

    return (

        <>
            <div className="p-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h3>useMemo Hook (My Location is {location.pathname.replace('/', '')})</h3>
                            <div>
                                <h4 className='py-3'>My Todos</h4>
                                {todos.map((todo, index) => {
                                    return <p key={index}>{todo}</p>;
                                })}
                                <button className='btn btn-success mb-3' onClick={addTodo}>Add Todo</button>
                            </div>
                            <hr />
                            <div className='p-2'>
                                Count: {count}
                                <button className='btn btn-success ms-2' onClick={increment}>+</button>
                                <h4 className='py-3'>Expensive Calculation</h4>
                                {calculation}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3 text-end">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-info' onClick={() => { navigate(-1) }}>Go Back</button>
                        <button className='btn btn-info mx-2' onClick={() => { navigate(1) }}>Go Farward</button>
                        <button className='btn btn-info' onClick={() => { navigate('/') }}>Go Home</button>
                    </div>
                </div>
            </div>
        </>

    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};


