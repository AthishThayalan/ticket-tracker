import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/tickets" className="navbar__link">
            Tickets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
