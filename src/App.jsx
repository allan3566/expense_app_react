import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Login from "./pages/Login.jsx";




 function App() {
  return (
      <Router>
        <nav className="p-4 bg-gray-600 text-white flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>


        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />


        </Routes>
      </Router>
  );
}

export default App;