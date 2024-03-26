import { Link } from "react-router-dom";
import team from "../../data/team";
import EmployeeName from "../EmployeeName/EmployeeName";
import "./Homepage.scss";
const Homepage = () => {
  return (
    <>
      <h1>Employee List</h1>
      <div className="homepage-container">
        {team.map((employee) => (
          <Link key={employee.id} to={`/employee/${employee.id}`}>
            <EmployeeName name={employee.name} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Homepage;
