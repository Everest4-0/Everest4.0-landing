import React from "react";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              Consultoria online em planeamento estratégico pessoal,
              desenvolvimento e gestão de carreiras
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Desenvolver soluções para apoiar a melhoria do desempenho dos
                                profissionais, desafiando-os a transformarem-se em profissionais de alto desempenho.
              </li>
              <li>
                <i className="ri-check-double-line"></i>Ser o serviço online de referência em Angola em desenvolvimento
                                pessoal e gestão de carreiras
              </li>
              <li>
                <i className="ri-check-double-line"></i> Proximidade, Excelência e
                                Inovação.
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              A Everest LDA Consultoria e Gestão de Carreiras é uma empresa de
              consultoria online em planeamento estratégico pessoal,
              desenvolvimento e gestão de carreiras.
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
