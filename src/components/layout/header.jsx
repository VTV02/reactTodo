import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul class="nav-list">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="./users">Users</Link>
          </li>
          <li>
            <Link to="./products">Products</Link>
          </li>
          <li>
            <Link to="./login">Login</Link>
          </li>
          <li>
            <Link to="./register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
