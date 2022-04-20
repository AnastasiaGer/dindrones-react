import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__credits">
            <div className="footer__copyright">&copy; 2020 germanova.site</div>

            <div className="footer__social">
              <a
                className="footer__social-link"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="footer__social-icon" width="35" height="35">
                  <use xlinkHref="#ig"></use>
                </svg>
              </a>
              <a
                className="footer__social-link"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="footer__social-icon" width="35" height="35">
                  <use xlinkHref="#fb"></use>
                </svg>
              </a>
              <a
                className="footer__social-link"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="footer__social-icon" width="35" height="35">
                  <use xlinkHref="#whatsup"></use>
                </svg>
              </a>
            </div>

            <div className="footer__llc">
              Din Drones LLC 1267 Willis St., STE 200, Redding, CA 96001
            </div>
          </div>

          <nav className="footer__nav">
            <Link to="/shop" className="footer__nav-link">
              Shop
            </Link>
            <a className="footer__nav-link" href="/">
              Account
            </a>
            <a className="footer__nav-link" href="/">
              Menu
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
