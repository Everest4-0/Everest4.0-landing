import React from "react";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id    volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.",
  },
  {
    question:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.",
  },
  {
    question:
      "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
  },
];
export const Faq = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>PERGUNTAS FREQUENTES</h2>
        </div>

        {faqs.map(({ question, answer }, key) => {
          return (
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="500"
              key={key}
            >
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>{question}</h4>
              </div>
              <div className="col-lg-7">
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
