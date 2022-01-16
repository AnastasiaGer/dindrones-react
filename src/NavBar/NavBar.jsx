import './NavBar.css';
import logo from '../dd-logo.png';

const NavBar = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo" data-scroll="#intro">
            <img src={logo} alt="" width="300" height="55" />
          </div>

          <nav className="nav" id="nav">
            <ul className="nav__list">
              <li>
                <a className="nav__link" href="/" data-scroll="#shop">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav__link" href="/" data-scroll="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav__link" href="/" data-scroll="#blog">
                  Pilots
                </a>
              </li>
            </ul>
          </nav>

          <button className="nav-toggle" id="nav_toggle" type="button">
            <span className="nav-toggle__item">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
