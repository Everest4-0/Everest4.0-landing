import React from "react";

const courses = [
  {
    title: "Lobira Duno",
    description:
      " Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod      tempor ut labore et dolore magna aliqua.",
    image: 'url("assets/img/more-services-1.jpg")',
    link: "#",
  },
  {
    title: "Limere Radses",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.",
    image: 'url("assets/img/more-services-2.jpg")',
    link: "#",
  },
  {
    title: "Nive Lodo",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.",
    image: 'url("assets/img/more-services-3.jpg")',
    link: "#",
  },

  {
    title: "Pale Treda",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.",
    image: 'url("assets/img/more-services-4.jpg")',
    link: "#",
  },
];

export default function Courses() {
  return (
    <>
      <section id="courses" className="more-services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Cursos Online</h2>
            <p>
              O Everest 4.0 é o aplicativo pelo qual prestamos o nossos
              serviços. É possível utilizar muitas funcionalidades do aplicativo
              mesmo quando não estiver conectado à internet. Assista o vídeo
              abaixo para conhecer mais sobre o aplicativo e suas principais
              funcionalidades, incluindo as que estão disponíveis offline.
            </p>
          </div>
          <div className="row">
            {courses.map(({ image, title, description, link }, key) => {
              return (
                <div className="col-md-6 d-flex align-items-stretch mt-4" key={key}>
                  <div
                    className="card"
                    style={{
                      backgroundImage: image,
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="">{title}</a>
                      </h5>
                      <p className="card-text">{description}</p>
                      <div className="read-more">
                        <a href={link}>
                          <i className="bi bi-arrow-right"></i> Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
