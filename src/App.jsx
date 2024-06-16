import MainDoc from "./components/MainDoc";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <MainDoc />
    </div>
  );
};

export default App;
