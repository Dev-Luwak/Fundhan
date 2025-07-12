import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Fundhan Logo" className="w-32 sm:w-40 lg-w:42" />
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="text-indigo-600">Login</Link>
        <Link to="/register" className="btn-primary">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
