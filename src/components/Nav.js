import "./Nav.css";
import Logo from "../components/media/logo_horizontal.png";

function Nav() {
  return (
    <div className="container-nav">
      <script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </script>
      <nav className="nav-one">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>

        <ul className="one">
          <li className="dropdown">
            <i className="fas fa-bars"></i>
            <div className="dropdown-content">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Portfolio</a>
              <a href="#">
              <button className="contactus-btn">Contact Us</button>
            </a>

            </div>
          </li>
          </ul>

          
          <ul className="two">

          <li >
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            
              <button className="contactus-btn">
              <a href="#">Contact Us
              </a>
              </button>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
