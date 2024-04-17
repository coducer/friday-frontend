import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="viewer-page vh-100">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order/:orderID" element={<Dashboard />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
