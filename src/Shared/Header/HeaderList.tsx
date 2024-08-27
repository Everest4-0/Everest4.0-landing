import React from "react";

export default function HeaderList({ show }: any) {
  return (
    <>
      <ul className={show ? "d-block" : ""} 
        data-bs-dismiss="offcanvas"
        aria-label="Close">
        <li>
              <a className="nav-link scrollto active" href="#hero">
                Início
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#highlight">
                Novidades
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Sobre Nós
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#access_app">
                Nossa App
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contactos
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#access_app">
                Entrar
              </a>
            </li>
      </ul>
    </>
  );
}
