import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    const isDocumentationPage = window.location.pathname === "/documentation";
    setShowSidebar((prevShow) => {
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
        <Navbar show={showSidebar} onSidebarClick={toggleSidebar} />
        <Sidebar show={showSidebar} onSidebarClick={toggleSidebar} />
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home toggleNavAndSidebar={toggleSidebar} />
                </Suspense>
              }
            />
            <Route
              path="/documentation"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MainDoc toggleNavAndSidebar={toggleSidebar} />
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
