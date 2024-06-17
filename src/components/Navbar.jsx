import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar" role="navigation">
      <div></div>
      <div className="navbar-nav">
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
