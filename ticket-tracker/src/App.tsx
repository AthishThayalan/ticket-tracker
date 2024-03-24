import EmployeeCard from "./components/EmployeeCard";
import team from "./data/team";

import "./styles/App.scss";

function App() {
  return (
    <>
      <h1>Ticket Tracker</h1>
      <div className="card__container">
        {team.map((employee) => (
          <EmployeeCard
            id={employee.id}
            name={employee.name}
            role={employee.role}
          />
        ))}
      </div>
    </>
  );
}

export default App;
