import React from "react";

const infoData = {
    description: 
    "A Everest LDA Consultoria e Gestão de Carreiras e uma empresa de  consultoria online em planeamento estrategico pessoal,    desenvolvimento e cestão de carreiras Consultoria online em    plancamento estratégico pessoal, desenvolvimento e pestão de    carreiras",
    social: {
        meta: "#",
        tw: "#",
        insta: "#",
        in: "#",
      },
      email: "geral@everest40.com",
      telephone: "+244 923 000 333",
      address: "Nova-Vida",
      localization: "Luanda, Angola"

}
export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Fale connosco</h2>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact-about">
              <h3>Everest4.0</h3>
              <p className="description">
                {
                    infoData.description
                }
              </p>
              <div className="social-links">
                <a href={infoData.social.tw} className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href={infoData.social.meta} className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href={infoData.social.insta} className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href={infoData.social.in} className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info">
              <div>
                <i className="ri-map-pin-line"></i>
                <p className="description">
                {infoData.address}
                  <br />
                  {infoData.localization}
                </p>
              </div>

              <div>
                <i className="ri-mail-send-line"></i>
                <p className="description">{infoData.email}</p>
              </div>

              <div>
                <i className="ri-phone-line"></i>
                <p className="description">{infoData.telephone}</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 col-md-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Seu Nome"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Seu Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Descrição"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Mensagem"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Enviar Mensagem</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
