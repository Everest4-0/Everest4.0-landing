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
          <h2>Preços</h2>
          <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
        </div>

        <div className="row">
          {prices.map(({ title, curency, time, value, descriptions, link, recomended }, key) => {
            return (
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div
                  className={recomended ? animation[key]?.class + ' recommended ' : animation[key]?.class}
                  data-aos={animation[key]?.data_os}
                  data-aos-delay={animation[key]?.data_os_delay}
                  key={key}
                >
                  <h3>{title}</h3>
                  <h4>
                    <sup>{curency}</sup>
                    {value}
                    <span> / {time}</span>
                  </h4>
                  <ul>
                    {descriptions.map((data, i) => {
                      return <li key={i}>{data}</li>;
                    })}
                    {/* <li className="na">Massa ultricies mi</li> */}
                  </ul>
                  <div className="btn-wrap">
                    <a href={link} className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
