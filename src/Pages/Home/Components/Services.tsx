import React from "react";

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
export const Services = () => {
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
