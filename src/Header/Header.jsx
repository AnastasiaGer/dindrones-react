import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../dd-logo.png';

const NavBar = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo" data-scroll="#intro">
            <Link to='/'><img src={logo} alt="" width="180" height="32" /></Link>
          </div>

          <nav className="nav" id="nav">
            <ul className="nav__list">
              <li>
              <Link to='/products/JiNJAd8mS31Px8Ybpd5x' className="nav__link">Din Battery Box</Link>
              </li>
              <li>
              <Link to='/products/CUKVyTXzHoP7Er1pDiOP' className="nav__link">OCTOFAERRY</Link>
              </li>
            </ul>
          </nav>

          <nav className="nav" id="nav">
            <ul className="nav__list">
              <li>
              <Link to='/shop' className="nav__link">Shop</Link>
              </li>
              <li>
                <a className="nav__link" href="/">
                  Account
                </a>
              </li>
              <li>
                <a className="nav__link" href="/">
                  Menu
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
