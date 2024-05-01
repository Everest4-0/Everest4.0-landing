import React from "react";

const prices = [
  {
    title: "Grátis",
    curency: "AKZ",
    value: "0",
    time: "MÊS",
    descriptions: [
      "Desafios",
      "Gestão e compromissos",
      "Diagnóstico",
      "Notícias",
      "-",
      "-",
    ],
    link: "#",
    recomended: false,
  },
  {
    title: "Básico",
    curency: "AKZ",
    value: "4.000",
    time: "MÊS",
    descriptions: [
      "Vagas de emprego",
      "Cursos online",
      "Objectivos e planos de acção",
      "Controlo financeiro",
      "Feedback 360º",
      "Mais plano grátis",
    ],
    link: "#",
    recomended: true,
  },
  {
    title: "Profissional",
    curency: "AKZ",
    value: "34.000",
    time: "MÊS",
    descriptions: [
      "Gestão de carreiras",
      "Coaching online",
      "Plano de desenvolvimento de competências",
      "Mais plano básico",
      "-",
      "-",
    ],
    link: "#",
    recomended: false,
  },
];

const animation = [
  {
    class: "box",
    data_os: "zoom-in-right",
    data_os_delay: "200",
  },
  {
    class: "box",
    data_os: "zoom-in",
    data_os_delay: "100",
  },
  {
    class: "box",
    data_os: "zoom-in-left",
    data_os_delay: "200",
  },
];
export const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div className="container">

                <div className="section-title">
                    <h2>Serviços, Planos e Preços</h2>
                    <p>Prestamos serviços de mentoria para profissionais, consultoria e formação para empreendedores, pequenas e médias empresas.</p>
                </div>

                <div className="row">


                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                        <div className="box" data-aos="zoom-in-left" data-aos-delay="100">
                            <h6>Mentoria</h6>
                            <h3>Plano Moco</h3>
                            <h4><sup>Kz</sup>35.000<span> / hora</span></h4>
                            <ul>
                                <li>No Plano Moco as sessões são individuais e realizam-se na modalidade 100% online, sendo o mínimo de 4 sessões (total Kz 140 000,00) por Programa de Mentoria.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="box  recommendedx" data-aos="zoom-in-left" data-aos-delay="200">
                            <h6>Mentoria</h6>
                            <h3>Plano Kilimanjaro</h3>
                            <h4><sup>Kz</sup>50.000<span> / hora</span></h4>
                            <ul>
                                <li>No Plano Kilimanjaro as sessões são individuais e realizam-se na modalidade híbrida (50% online e 50% presencial), sendo o mínimo de 4 sessões (total Kz 200 000,00) por Programa de Mentoria.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="box" data-aos="zoom-in-left" data-aos-delay="200">
                            <h6>Mentoria</h6>
                            <h3>Plano Everest</h3>
                            <h4><sup>Kz</sup>75.000<span> / hora</span></h4>
                            <ul>
                                <li>No Plano Everest as sessões são individuais e realizam-se na modalidade 100% Presencial, sendo o mínimo de 4 sessões (total Kz 300 000,00) por Programa de Mentoria.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="box" data-aos="zoom-in-right" data-aos-delay="200">
                        <h6>Empresas</h6>
                            <h3>Consultoria</h3>
                            <h4><sup>Kz</sup>100.000<span> / hora</span></h4>
                            <ul>
                                <li>Consutoria em Gestão empresarial, Transformação organizacional, Project Management Officer (PMO) e Gestão estratégica do capital humano.</li>
                            </ul>
                            <br/>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
