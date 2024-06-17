import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = ({ toggleNavAndSidebar }) => {
  useEffect(() => {
    if (typeof toggleNavAndSidebar === "function") {
      toggleNavAndSidebar();
      return () => {
        toggleNavAndSidebar();
      };
    }
  }, [toggleNavAndSidebar]);

  return (
    <div className="home-container">
      <h1 className="text-center mb-4">Home Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                <Link to="/documentation" className="btn btn-primary">
                  Go to Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  toggleNavAndSidebar: PropTypes.func.isRequired,
};

export default Home;
