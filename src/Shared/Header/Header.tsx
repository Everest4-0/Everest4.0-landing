import logoDark from "../../assets/images/logo/logo-dark.png";
import HeaderList from "./HeaderList";

import "./index.css";

export const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top">
        <nav className="navbar" id="navbar" >
          <div className="container">
            <a className="navbar-brand" href="#">
              <div className="logo-icon"></div>
            </a>
            <button
              className="btn border-0 shadow-none mobile-nav-toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <i className="bi bi-list"></i>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn shadow-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <div className="offcanvas-body">
                <HeaderList show={true} />
              </div>
            </div>

            <HeaderList />
          </div>
        </nav>
      </header>
    </>
  );
};
