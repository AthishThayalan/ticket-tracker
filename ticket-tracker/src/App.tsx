import EmployeeCard from "./components/EmployeeCard";
import team from "./data/team";
import Header from "./components/Header";
import { useState } from "react";

import "./styles/App.scss";

function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const handleNameFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(event.target.value);
  };

  const handleRoleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRoleFilter(event.target.value);
  };

  const filteredTeam = team.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      (roleFilter === "" || employee.role === roleFilter)
    );
  });
  return (
    <>
      <Header
        nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
        roleFilter={roleFilter}
        handleRoleFilterChange={handleRoleFilterChange}
      />

      <div className="card__container">
        {filteredTeam.map((employee) => (
          <EmployeeCard
            key={employee.id}
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
