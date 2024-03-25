import { useState, useEffect } from "react";
type Employee = {
  id: number;
  name: string;
  role: string;
};

const EmployeeCard = ({ id, name, role }: Employee) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(`count_${id}`);
    return storedCount ? Number(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`count_${id}`, String(count));
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0));
  };
  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <h3 className="card__role">{role}</h3>
      <div className="card__counter">
        <button className="card__counter--decrement" onClick={decrement}>
          -
        </button>
        <p className="card__counter-value">{count}</p>
        <button className="card__counter--increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
