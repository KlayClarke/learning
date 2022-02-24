import "../App.css";
import { Link } from "react-router-dom";

const Nav = (activeState) => {
  return (
    <nav>
      <Link to={"/"} className="nav-link">
        Logo
      </Link>
      <ul className="nav-links">
        <li>
          <Link to={"/shop"} className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
