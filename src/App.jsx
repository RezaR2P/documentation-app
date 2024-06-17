import MainDoc from "./components/MainDoc";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <MainDoc />
    </div>
  );
};

export default App;
