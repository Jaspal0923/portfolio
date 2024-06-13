import "./Header.css";
import { Link } from "react-scroll";
const MobileMenu = ({ toggleNavbar }) => {
  return (
    <div className="mobile-menu">
      <div className="uppHead">
        <div className="logo">
          <Link
            to="hero-page"
            smooth={true}
            duration={500}
            onClick={toggleNavbar}
          >
            JASPAL <span style={{ color: "red" }}>|</span>
          </Link>
        </div>
        <button className="close-button" onClick={toggleNavbar}>
          ×
        </button>
      </div>

      <ul>
        <li>
          <Link
            to="hero-page"
            smooth={true}
            duration={500}
            onClick={toggleNavbar}
          >
            HOME
          </Link>
        </li>
        <li>
          <a href="#certificates" onClick={toggleNavbar}>
            CERTIFICATES
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleNavbar}>
            PROJECTS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
