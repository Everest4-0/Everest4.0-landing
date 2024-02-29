import React from "react";

export default function HeaderList({ show }: any) {
  return (
    <>
      <ul className={show ? "d-block" : ""} 
        data-bs-dismiss="offcanvas"
        aria-label="Close">
        <li>
          <a className="nav-link scrollto active" href="#hero" >
            Inicio
          </a>
        </li>
        <li>
          <a className="nav-link scrollto " href="#highlight">
            Destaque
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#about">
            Sobre Nós
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#services">
            Serviços
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#courses">
            Cursos
          </a>
        </li>

        <li>
          <a className="nav-link scrollto" href="#pricing">
            Preços
          </a>
        </li>

        <li>
          <a className="nav-link scrollto" href="#team">
            Nossa equipa
          </a>
        </li>

        <li>
          <a className="nav-link scrollto" href="#faq">
            {/* App everest4.0 */} FAQ
          </a>
        </li>
        {/*  <li>
              <a className="nav-link scrollto" href="#about">
                Anúcions Vagas
              </a>
            </li> */}

        {/*  <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}

        <li>
          <a className="nav-link scrollto" href="#contact">
            Contactos
          </a>
        </li>
        <li className="">
          <a className="btn getstarted scrollto" href="#about">
            Entrar
          </a>
        </li>
      </ul>
    </>
  );
}
