import { Link } from "react-router-dom";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/about" className="hover:text-gray-600">
            About
          </Link>
          <Button variant="primary" size="small" onClick={handleLogout}>
            LogOut
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
