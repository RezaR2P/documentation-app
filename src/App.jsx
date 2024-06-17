import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [showNavAndSidebar, setShowNavAndSidebar] = useState(true);
  const toggleNavAndSidebar = () => {
    const isDocumentationPage = window.location.pathname === "/documentation";
    setShowNavAndSidebar((prevShow) => {
      if (isDocumentationPage) {
        return !prevShow;
      } else {
        return false;
      }
    });
  };

  const Home = lazy(() => import("./components/Home"));
  const MainDoc = lazy(() => import("./components/MainDoc"));

  return (
    <Router>
      <div className="app-container">
        <Navbar show={showNavAndSidebar} onSidebarClick={toggleNavAndSidebar} />
        <Sidebar
          show={showNavAndSidebar}
          onSidebarClick={toggleNavAndSidebar}
        />
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home toggleNavAndSidebar={toggleNavAndSidebar} />
                </Suspense>
              }
            />
            <Route
              path="/documentation"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MainDoc toggleNavAndSidebar={toggleNavAndSidebar} />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
