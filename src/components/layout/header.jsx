import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="./users">Users</NavLink>
          </li>
          <li>
            <NavLink to="./products">Products</NavLink>
          </li>
          <li>
            <NavLink to="./login">Login</NavLink>
          </li>
          <li>
            <NavLink to="./register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
