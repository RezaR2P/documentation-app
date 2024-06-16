import "./Sidebar.css";
import { TiHtml5 } from "react-icons/ti";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar" role="navigation">
      <div className="sidebar-brand">
        <TiHtml5 className="icon-html" />
        <span>HTML Documentation</span>
      </div>
      <div className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="#pengenalan">
              Pengenalan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#referensi-html">
              Referensi HTML
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#html-form">
              HTML Forms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#element-tag">
              Element Tag HTML
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#html-media">
              HTML Media
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#html-api">
              HTML API
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#grafik-html">
              Grafik HTML
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
