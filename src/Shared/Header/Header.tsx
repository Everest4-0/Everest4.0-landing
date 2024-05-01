import logoDark from "../../assets/images/logo/logo-dark.png";
import HeaderList from "./HeaderList";

import "./index.css";

export const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href=""><img src={logoDark}/></a></h1>

                    <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Início</a></li>
                        <li><a className="nav-link scrollto " href="#highlight">Novidades</a></li>
                        <li><a className="nav-link scrollto" href="#services">Serviços</a></li>
                        {/*<li><a className="nav-link scrollto" href="#about">App Everest4.0</a></li>
                        <li><a className="nav-link scrollto" href="#about">Anúncio de Vagas</a></li>*/}
                        <li><a className="nav-link scrollto" href="#about">Sobre Nós</a></li>
                        {/*<li><a className="nav-link scrollto" href="#services">Serviços</a></li>
                        <li><a className="nav-link scrollto" href="#courses">Courses</a></li>
                        <li><a className="nav-link scrollto" href="#team">Nossa Equipa</a></li>*/}
                        {/*<li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>*/}
                        
                        <li><a className="nav-link scrollto" href="#contact">Contactos</a></li>
                        <li><a className="getstarted scrollto" href="#about">Entrar</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

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

            
          </div>
        
      </header>
    
  );
};
