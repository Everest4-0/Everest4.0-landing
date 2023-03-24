import React from "react";

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
            <div className="col-md-6 d-flex align-items-stretch">
              <div
                className="card"
                style={{
                  backgroundImage: 'url("assets/img/more-services-1.jpg")',
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Lobira Duno</a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div
                className="card"
                style={{
                  backgroundImage: 'url("assets/img/more-services-2.jpg")',
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Limere Radses</a>
                  </h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4">
              <div
                className="card"
                style={{
                  backgroundImage: 'url("assets/img/more-services-3.jpg")',
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Nive Lodo</a>
                  </h5>
                  <p className="card-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                    fugit, sed quia magni dolores.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4">
              <div
                className="card"
                style={{
                  backgroundImage: 'url("assets/img/more-services-4.jpg")',
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Pale Treda</a>
                  </h5>
                  <p className="card-text">
                    Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                    quisquam laudantium voluptatem.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      <i className="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
