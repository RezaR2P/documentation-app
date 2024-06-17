import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ show, toggleNavAndSidebar }) => {
  if (!show) {
    return null;
  }

  const handleSidebarClick = () => {
    toggleNavAndSidebar();
  };

  return (
    <nav id="sidebar" className="sidebar" role="navigation">
      <div className="sidebar-nav">
        <ul>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#pengenalan"
              onClick={handleSidebarClick}
            >
              Pengenalan
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#referensi-html"
              onClick={handleSidebarClick}
            >
              Referensi HTML
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#html-form"
              onClick={handleSidebarClick}
            >
              HTML Forms
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#element-tag"
              onClick={handleSidebarClick}
            >
              Element Tag HTML
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#html-media"
              onClick={handleSidebarClick}
            >
              HTML Media
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#html-api"
              onClick={handleSidebarClick}
            >
              HTML API
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="#grafik-html"
              onClick={handleSidebarClick}
            >
              Grafik HTML
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleNavAndSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
