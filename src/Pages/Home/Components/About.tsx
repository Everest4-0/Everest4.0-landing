import React from "react";

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
              A Everest – Consultoria e Gestão de Carreiras LDA é uma sociedade que tem por objecto a prestação de serviços de consultoria às empresas, aconselhamento sobre finanças pessoais, mentoria e orientação profissional.</p>
            <p>
              Somos uma equipa de jovens profissionais que ao longo dos últimos 15 anos acumulou experiência profissional relevante no desenvolvimento de pessoas e na prestação de serviços de consultoria em grandes empresas.
              Estamos comprometidos em “Promover a melhoria contínua do desempenho profissional dos jovens e a sustentabilidade dos empreendedores.”</p>
            <br /><br /><br /><br />
            <h4>Serviços de Mentoria</h4>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>Desenvolvimento Pessoal
              </li>
              <li>
                <i className="ri-check-double-line"></i>Desenvolvimento Profissional
              </li>
              <li>
                <i className="ri-check-double-line"></i>Finanças Pessoais
              </li>
              <li>
                <i className="ri-check-double-line"></i>Liderança Estratégica
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              Não realizamos sessões de workshop ou de formação. Prestamos serviços de Mentoria em que o cliente terá a oportunidade de desenvolver e/ou consolidar as suas competências, através de uma abordagem prática e interactiva com a mentoria de profissionais de elevada experiência nas respectivas áreas.</p>
            <p>
              Os nossos serviços de consultoria empresarial, destinados às pequenas e médias empresas, envolvem: a) Diagnóstico de problemas/ necessidades, b) Definição de estratégias e do plano de ações, c) Apoio e acompanhamento da execução, e d) Avaliação dos resultados e definição de medidas correctivas.
            </p>
            {/*<a href="#" className="btn-learn-more">
              Saber mais
  </a>*/}
            <br /><br /><br />
            <h4>Serviços de Consultoria</h4>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>Gestão Empresarial
              </li>
              <li>
                <i className="ri-check-double-line"></i>Transformação Organizacional
              </li>
              <li>
                <i className="ri-check-double-line"></i>Project Management Officer
              </li>
              <li>
                <i className="ri-check-double-line"></i>Gestão Estratégica do Capital Humano
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
