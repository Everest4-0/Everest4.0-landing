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
    <section id="about" className="about" style={{ paddingTop: 200 }}>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Sobre Nós</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              A Everest – Consultoria e Gestão de Carreiras LDA é uma sociedade que tem por objecto a prestação de serviços de consultoria às empresas, aconselhamento sobre finanças pessoais, mentoria e orientação profissional.</p>
            <p>
              Somos uma equipa de jovens profissionais que ao longo dos últimos 15 anos acumulou experiência profissional relevante no desenvolvimento de pessoas e na prestação de serviços de consultoria em grandes empresas.
            </p>            
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
            No serviço de mentoria, o cliente tem a oportunidade de desenvolver e/ou consolidar as suas competências, através de uma abordagem prática e interactiva com a mentoria de profissionais de elevada experiência nas respectivas áreas.</p>
            <p>
              Os nossos serviços de consultoria empresarial, destinados às pequenas e médias empresas, envolvem: a) Diagnóstico de problemas/ necessidades, b) Definição de estratégias e do plano de ações, c) Apoio e acompanhamento da execução, e d) Avaliação dos resultados e definição de medidas correctivas.
            </p>           
          </div>
        </div>
      </div>
    </section>
  );
};
