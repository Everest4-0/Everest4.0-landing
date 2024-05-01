import React from "react";
import { About } from "./Components/About";
import { Clients } from "./Components/Clients";
import { Count } from "./Components/Count";
import Courses from "./Components/Courses";
import { Faq } from "./Components/Faq";
import { Features } from "./Components/Features";
import { MoreServices } from "./Components/MoreServices";
import { Portfolio } from "./Components/Portfolio";
import { Pricing } from "./Components/Pricing";
import { Services } from "./Components/Services";
import { Team } from "./Components/Team";
import { Testimonials } from "./Components/Testimonials";

import imageBg from "../../assets/images/home/everest-montain.jpg";
import logoDark from "../../assets/images/logo/logo-dark.png";
import { Highlight } from "./Components/Highlight";
import { Contact } from "./Components/Contact";

export const Home = () => {
  return (
    <>
      <section
        id="hero"
        className="d-flex align-items-center"
        style={{
          backgroundImage: `url(${imageBg})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
              style={{ color: "#FFF !important", background:'rgba(0,0,0,.5)', padding:'7% 30px' }}
            >
              <img
                src={logoDark}
                className="img-fluid animated"
                alt=""
                style={{ marginLeft: "-10%" }}
              />

              <h2 data-aos="fade-up" data-aos-delay="400">
                Consultoria e Gestão de Carreiras
              </h2>
              <h1 data-aos="fade-up">Juntos ao topo</h1>
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#about" className="btn-get-started scrollto">
                  Iniciar
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay="200"
            ></div>
          </div>
        </div>
      </section>

      <main id="main">
        {/*<Clients />*/}

        <Highlight />

        {/**
        <Pricing />
         */}
        <Services />
        <About />

        <Count />


        {/*<Courses />*/}

        {/*   <MoreServices /> */}

        {/*  <Features />


        <Portfolio /> */}


        {/*<Team />

      <Faq />*/}

        {/* <Testimonials /> */}

        <Contact />
      </main>
    </>
  );
};
