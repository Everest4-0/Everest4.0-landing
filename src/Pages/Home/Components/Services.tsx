import React, { useState } from "react";
import "./Services.css"

import imgService5 from '../../../assets/images/Services/service-5.png';
import imgService1 from '../../../assets/images/Services/service-1.png';
import imgService8 from '../../../assets/images/Services/service-8.png';
import imgService9 from '../../../assets/images/Services/service-9.png';
export const Services = () => {

  const [tab, setTab] = useState(0)
  return (
    <section id="services" className="services" style={{ paddingTop: 200, background: '#EEE' }}>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Serviços</h2>
          <p className="description">
            Prestamos serviços de mentoria para profissionais, consultoria e formação para empreendedores, pequenas e médias empresas.
          </p>
        </div>

        <div className="row">
          <div className="col-md-12 container align-items-center justify-content-center" style={{ marginBottom: 15, textAlign: 'center', margin: '0 auto', alignContent: "center" }}>
            <div className="" style={{ margin:' auto 16%'}}>
              <ul className="nav">
                <li className="nav-item" onClick={() => setTab(1)} >
                  <a className={`nav-link ${tab === 1 && "active"}`} aria-current="page" >Mentoria</a>
                </li>
                <li className="nav-item" onClick={() => setTab(2)}>
                  <a className={`nav-link ${tab === 2 && "active"}`} >Consultoria e Formação</a>
                </li>
                <li className="nav-item" onClick={() => setTab(3)}>
                  <a className={`nav-link ${tab === 3 && "active"}`} >Contabilidade e Auditoria</a>
                </li>
                <li className="nav-item" onClick={() => setTab(4)}>
                  <a className={`nav-link ${tab === 4 && "active"}`} >Outros Serviços</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 align-items-center justify-content-center" style={{ alignContent: "center" }}>
            {tab === 0 &&
              <div className="col-md-8 container align-items-center justify-content-center">
                <div className="row service-box">
                  <div style={{ borderTopLeftRadius: '100%', background: '#9cf' }} onClick={() => setTab(1)}>Mentoria</div>
                  <div style={{ borderTopRightRadius: '100%', background: '#9df' }} onClick={() => setTab(2)}>Consultoria e Formação</div>
                  <div style={{ borderBottomLeftRadius: '100%', background: '#9ef' }} onClick={() => setTab(3)}>Contabilidade e Auditoria</div>
                  <div style={{ borderBottomRightRadius: '100%', background: '#9ff' }} onClick={() => setTab(4)}>Outros Serviços</div>
                </div>
              </div>}
            {tab === 1 &&
              <div className="row">
                <div data-aos="fade-up" className="col-md-6" style={{  height: '50vh', backgroundImage: `url(${imgService5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                </div>
                <div className="col-md-6" style={{ padding: '5%' }} >
                  <h2 data-aos="fade-up" data-aos-delay="50">Mentoria</h2>
                  <p className="description" data-aos="fade-up" data-aos-delay="150">
                    <ul>
                      <li>Integração profissional </li>
                      <li>Desenvolvimento profissional </li>
                      <li>Liderança estratégica </li>
                      <li>Finanças pessoais</li>
                    </ul>
                  </p>
                </div>
              </div>}
            {tab === 2 &&
              <div className="row">
                <div className="col-md-6" style={{ padding: '5%' }}>
                  <h2 data-aos="fade-up" data-aos-delay="50">Consultoria e Formação</h2>
                  <p data-aos="fade-up" data-aos-delay="150" className="description">
                    <ul>
                      <li>Corporate Governance</li>
                      <li>Planeamento estratégico e controlo de gestão </li>
                      <li>Finanças empresariais </li>
                      <li>Gestão estratégica do capital humano</li>
                      <li>Transformação e inovação organizacional </li>
                      <li>Direito empresarial</li>
                    </ul>
                  </p>
                </div>
                <div data-aos="fade-up" className="col-md-6" style={{  height: '50vh', backgroundImage: `url(${imgService1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                </div>
              </div>}
            {tab === 3 &&
              <div className="row">
                <div data-aos="fade-up" className="col-md-6" style={{  height: '50vh', backgroundImage: `url(${imgService9})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                </div>
                <div className="col-md-6" style={{ padding: '5%' }}>
                  <h2 data-aos="fade-up" data-aos-delay="50">Contabilidade e Auditoria</h2>
                  <p data-aos="fade-up" data-aos-delay="150" className="description">
                    <ul>
                      <li>Facturação </li>
                      <li>Preparação das Demonstrações Financeiras </li>
                      <li>Preparação do Relatório e Contas</li>
                      <li>Auditoria às contas</li>
                    </ul>
                  </p>
                </div>
              </div>}
            {tab === 4 &&
              <div className="row">
                <div className="col-md-6" style={{ padding: '5%' }}>
                  <h2 data-aos="fade-up" data-aos-delay="50">Outros Serviços</h2>
                  <p data-aos="fade-up" data-aos-delay="150" className="description">
                    <ul>
                      <li>Constituição e legalização de empresas</li>
                      <li>Recrutamento e selecção de pessoal </li>
                      <li>Planeamento e gestão da formação </li>
                      <li>Qualificador Ocupacional </li>
                      <li>Estudo de clima organizacional</li>
                      <li>Gestão de programas e projectos</li>
                    </ul>
                  </p>
                </div>
                <div data-aos="fade-up" className="col-md-6" style={{  height: '50vh', backgroundImage: `url(${imgService8})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                </div>
              </div>}
          </div>
        </div>
      </div>
    </section>
  );
};
export const Services1 = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Servíços</h2>
          <p className="description">
            O Everest4.0 é um aplicativo desenvolvido com base nos conceitos,
            princípios, técnicas e ferramentas de Administração e Gestão de
            Empresas, adaptados ao contexto pessoal, para promover uma cultura
            de excelência na forma de ser, estar e trabalhar dos profissionais.
          </p>
        </div>

        <div className="row">
          {services.map(({ title, descritption, icon }, key) => {
            return (
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mt-4"
                key={key}
              >
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className={icon}></i>
                  </div>
                  <h4 className="title">
                    <a href="">{title}</a>
                  </h4>
                  <p className="description">{descritption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Planeamento estratégico pessoal",
    descritption:
      "Apoio na análise estratégica nos 3 pilares da vida (Pessoal, Profissional e Financeiro), mediante a identificação das Forças, Fraquezas.",
    icon: "bx bxl-dribbble",
  },

  {
    title: "Desenvolvimento de competências",
    descritption:
      "Apoio no diagnóstico de competências necessárias ao alcance dos     objectivos definidos, elaboração, execução e avaliação da eficácia do plano de desenvolvimento.",
    icon: "bx bx-file",
  },

  {
    title: "Gestão de carreiras",
    descritption:
      "Apoio no diagnóstico e planeamento estratégico profissional, elaboração e execução de planos de acção para quem pretende entrar no mercado de trabalho.",
    icon: "bx bx-tachometer",
  },

  {
    title: "Comunidade Everest (networking)",
    descritption:
      "Através da qual o cliente podem interagir com outros    profissionais e ampliar sua rede de contactos.",
    icon: "bx bx-world",
  },

  {
    title: "Anúncio de vagas de emprego",
    descritption:
      "Através da qual o cliente podem interagir com outros    profissionais e ampliar sua rede de contactos.",
    icon: "bx bx-tachometer",
  },

  {
    title: "Cursos online",
    descritption:
      "Através da qual o cliente podem interagir com outros    profissionais e ampliar sua rede de contactos.",
    icon: "bx bx-tachometer",
  },

  {
    title: "Coaching online",
    descritption:
      "Através da qual o cliente podem interagir com outros    profissionais e ampliar sua rede de contactos.",
    icon: "bx bx-tachometer",
  },
];