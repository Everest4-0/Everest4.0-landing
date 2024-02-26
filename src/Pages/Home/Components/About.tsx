import React from "react";
import styled from "styled-components";

const Description = styled.p`
  margin: 0 0 0 10px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #484848;

`

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Sobre Nós</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              Consultoria online em planeamento estratégico pessoal,
              desenvolvimento e gestão de carreiras
            </p>
            <ul>
              <li>
              <Description>
              <i className="ri-check-double-line"></i>{" "}
                <b className="title">Valores: </b>
                Parceria, Excelência e Transparência
              </Description>
              </li>
              <li>
                <Description>
                <i className="ri-check-double-line"></i>
                <strong>Visão: </strong>
                Ser a referência na transformação das pessoas e negócios
                </Description>
              </li>
              <li>
                <Description>
                <i className="ri-check-double-line"></i>
                <b className="title">Missão: </b>
                Despertar o potencial dos profissionais e das empresas para
                gerar melhores resultados
                </Description>
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
              Saber mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
