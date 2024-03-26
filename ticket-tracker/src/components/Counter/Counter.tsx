import React from "react";
import "./Counter.scss";

type CounterProp = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Counter: React.FC<CounterProp> = ({ decrement, increment, count }) => {
  return (
    <div className="card__counter">
      <button className="card__counter--decrement" onClick={decrement}>
        -
      </button>
      <p className="card__counter-value">{count}</p>
      <button className="card__counter--increment" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
