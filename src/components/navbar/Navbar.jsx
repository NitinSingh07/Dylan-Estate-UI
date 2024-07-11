import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/LOGO.png" alt="" />
        </a>
        <a href="/"> Home</a>
        <a href="/"> About</a>
        <a href="/"> Contact Us </a>
        <a href="/"> More</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="" alt="" />
            <span className="name">john Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification"> 3 </div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/"> Sign Up </a>
            <a href="/" className="register">
              {" "}
              Sign In{" "}
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
