import { Link } from "react-router";
import logo from "/white-logo.svg";

const Navbar = ({ pic }) => {
  return (
    <div className="navbar container mx-auto p-4 bg-transparent">
      <div className="navbar-start">
        <Link to="/">
          <img src={pic ? pic : logo} alt="logo" className="w-[300px]" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
