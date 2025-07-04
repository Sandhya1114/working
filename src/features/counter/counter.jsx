import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
    const [amount, setAmount] = useState(2);

    const count = useSelector((state) => {
        return state.counter.value;
    });

    const dispatch = useDispatch();

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <br /><br />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button onClick={() => dispatch(incrementByAmount(amount))}>
                Add Amount
            </button>
        </div>
    )
}